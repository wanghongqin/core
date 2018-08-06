package org.baseframework.activity.config;

import org.sitemesh.builder.SiteMeshFilterBuilder;
import org.sitemesh.config.ConfigurableSiteMeshFilter;

public class WebSiteMeshFilter extends ConfigurableSiteMeshFilter {

    @Override
    protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
        builder.addDecoratorPath("/*", "/layout/admin.html");
    }
}

