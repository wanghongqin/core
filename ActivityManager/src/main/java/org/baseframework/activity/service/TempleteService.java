package org.baseframework.activity.service;

import org.baseframework.activity.models.Templete;

import java.util.List;

public interface TempleteService {
    List<Templete> getTempleteWithType(String type);
}
