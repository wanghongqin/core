package org.baseframework.activity.models.extend;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

public class ActivityType implements Serializable {

	private static final long serialVersionUID = 1L;
	@Getter
	@Setter
	private String type;
	@Getter
	@Setter
	private String dec;
	
}
