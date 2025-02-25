/*
 * Copyright 2023 AntGroup CO., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */

package com.antgroup.geaflow.console.core.model.task;

import com.antgroup.geaflow.console.common.util.type.GeaflowPluginType;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class K8sTaskHandle extends GeaflowTaskHandle {


    // startup notify
    protected StartupNotifyInfo startupNotifyInfo;

    @Setter
    @Getter
    public static class StartupNotifyInfo {

        private String masterAddress;

        private String driverAddress;

        private String clientAddress;

    }


    public K8sTaskHandle(String appId) {
        super(GeaflowPluginType.K8S, appId);
    }
}
