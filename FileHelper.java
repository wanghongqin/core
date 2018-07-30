package org.baseframework.activity.comm;

import org.apache.commons.codec.binary.Base64;

import java.io.*;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

/**
 * @author 王鸿钦
 * 文件操作
 */
public class FileHelper {
    /**
     * 判断文件或文件夹是否存在
     *
     * @param path
     * @return
     */
    public static boolean exits(String path) {
        File file = new File(path);
        return file.exists();
    }

    /**
     * 创建文件夹
     *
     * @param path
     * @return
     */
    public static boolean mkdirs(String path) {
        File file = new File(path);
        if (!file.exists()) {
            if (file.isDirectory()) {
                return file.mkdirs();
            }
        }
        return true;
    }

    /**
     * 保存文件
     *
     * @param path    文件路径
     * @param content base64 内容
     * @return
     */
    public static boolean save(String path, String content) {
        OutputStream out = null;
        synchronized (path) {
            try {
                byte[] b = Base64.decodeBase64(content);
                for (int i = 0; i < b.length; ++i) {
                    if (b[i] < 0) {// 调整异常数据
                        b[i] += 256;
                    }
                }
                out = new FileOutputStream(path);
                out.write(b);
            } catch (Exception e) {
                return false;
            } finally {
                if (out != null) {
                    try {
                        out.flush();
                        out.close();
                    } catch (IOException e) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    /**
     * 将内容写入到文件中
     *
     * @param path
     * @param content
     * @return
     */
    public static boolean write(String path, String content) {
        RandomAccessFile file = null;
        FileChannel channel = null;
        synchronized (path) {
            try {
                file = new RandomAccessFile(path, "rw");
                channel = file.getChannel();
                byte[] contents = content.getBytes("utf-8");
                ByteBuffer buffer = ByteBuffer.wrap(contents);
                channel.write(buffer);
                buffer.clear();
            } catch (IOException e) {
                return false;
            } finally {
                try {
                    if (channel != null) {
                        channel.close();
                    }
                    if (file != null) {
                        file.close();
                    }
                } catch (IOException e) {
                    return false;
                }
            }
            return true;
        }
    }

    public static boolean append(String path, String content) {
        FileOutputStream outputStream = null;
        FileChannel channel = null;
        synchronized (path) {
            try {
                outputStream = new FileOutputStream(path, true);
                channel = outputStream.getChannel();
                ByteBuffer buffer = ByteBuffer.wrap(content.getBytes("utf-8"));
                channel.write(buffer);
                buffer.clear();
            } catch (IOException ex) {
                return false;
            } finally {
                try {
                    if (channel != null) {
                        channel.close();
                    }
                    if (outputStream != null) {
                        outputStream.close();
                    }
                } catch (IOException e) {
                    return false;
                }
            }

        }
        return true;
    }


    /**
     * 读取数据
     *
     * @param path
     * @return
     */
    public static String read(String path) {
        if (exits(path)) {
            RandomAccessFile file = null;
            FileChannel channel = null;
            synchronized (path) {
                try {
                    file = new RandomAccessFile(path, "r");
                    channel = file.getChannel();
                    byte[] contents = new byte[1024];
                    ByteBuffer buffer = ByteBuffer.allocate(1024);
                    StringBuffer strBuffer = new StringBuffer();
                    while (channel.read(buffer) != -1) {
                        int poisiton = buffer.position();
                        buffer.flip();
                        buffer.get(contents,0,poisiton);
                        strBuffer.append(new String(contents,0,poisiton,"utf-8"));
                        buffer.clear();
                    }
                    return strBuffer.toString();
                } catch (IOException e) {
                    return "";
                } finally {
                    try {
                        if (channel != null) {
                            channel.close();
                        }
                        if (file != null) {
                            file.close();
                        }
                    } catch (IOException e) {
                        return "";
                    }
                }
            }
        } else {
            return "";
        }
    }
}
