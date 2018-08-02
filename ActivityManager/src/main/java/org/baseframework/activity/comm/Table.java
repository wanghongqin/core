package org.baseframework.activity.comm;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

public class Table<T> implements Serializable {
  
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Setter
	@Getter
	private long total;

	@Setter
	@Getter
	private List<T> datas;
}
