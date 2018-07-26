package org.baseframework.activity.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Properties;

/**
 * 数据库相关配置
 * 王鸿钦
 */

@Configuration
@EnableTransactionManagement
public class DataSourceConfig {

    /**
     * 数据库相关配置
     */
    @Value("${datasource.url}")
    private String url;
    @Value("${datasource.username}")
    private String username;
    @Value("${datasource.password}")
    private String password;
    @Value("${datasource.driverClassName}")
    private String driverClassName;


    /**
     * jpa 相关配置
     */
    @Value("${datasource.driverClassName}")
    private String modelPackge;

    @Value("${jpaproperties.show_sql}")
    private String show_sql="true";
    @Value("${jpaproperties.format_sql}")
    private String format_sql="true";
    @Value("${jpaproperties.autoReconnect}")
    private String autoReconnect="true";
    @Value("${jpaproperties.hbm2ddl_auto}")
    private String hbm2ddl_auto="update";
    @Value("${jpaproperties.dialect}")
    private String dialect="org.hibernate.dialect.MySQL5InnoDBDialect";
    @Value("${jpaproperties.entitypackages}")
    private String entitypackages;

    @Bean
    public HikariDataSource writeDataSource() {
        System.out.println("注入hikari！！！");
        HikariDataSource datasource = new HikariDataSource();
        datasource.setJdbcUrl(url);
        datasource.setDriverClassName(driverClassName);
        datasource.setUsername(username);
        datasource.setPassword(password);
        return datasource;
    }
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManager = new LocalContainerEntityManagerFactoryBean();
        entityManager.setDataSource(writeDataSource());
        entityManager.setPackagesToScan(entitypackages);
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setDatabasePlatform(dialect);
        entityManager.setJpaVendorAdapter(vendorAdapter);
        entityManager.setJpaProperties(additionalProperties());
        return entityManager;
    }

    private Properties additionalProperties() {
        Properties properties = new Properties();
        properties.setProperty("hibernate.show_sql", show_sql);
        properties.setProperty("hibernate.format_sql", format_sql);
        properties.setProperty("hibernate.autoReconnect", autoReconnect);
        properties.setProperty("hibernate.hbm2ddl.auto", hbm2ddl_auto);
        return properties;
    }
}
