package org.baseframework.activity.service;

import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityAttach;

import javax.servlet.http.HttpServletRequest;

public interface ActivityAttachService {
    ActivityAttach Edit(Activity activity, HttpServletRequest request);
}
