import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Component } from 'react';
import Icon from '../Icon'

import 'react-vertical-timeline-component/style.min.css';

class VerticalChanging extends Component {
    render() {
        return (
            <div className="vericalChanging" id="sliders">
                <VerticalTimeline>
                    <VerticalTimelineElement className="vertical-timeline-element" icon={<Icon />}>
                        <h3>Some More Cool Stuff</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element" icon={<Icon />}>
                        <h3>Some More Cool Stuff</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element" icon={<Icon />}>
                        <h3>Some More Cool Stuff</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element" icon={<Icon />}>
                        <h3>Some More Cool Stuff</h3>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default VerticalChanging;