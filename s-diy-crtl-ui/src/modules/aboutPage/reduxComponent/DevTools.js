/**
 * Created by Administrator on 2017/8/7 0007.
 */
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);