// app/aphi/[...slug]/page.tsx

import { AphiScrollRouter } from "../../../components/aphi/AphiScrollRouter";
import {RitualLogViewer} from "../../..//components/rituals/RitualLogViewer";
import React, { Component } from "react";

export default class AphiPage extends Component<{ params: { slug?: string[] } }> {
  render() {
    const slug = this.props.params?.slug || [];

    // 🌱 Here’s the conditional sprout:
    if (slug[0] === "ritualLogs") {
      return <RitualLogViewer path={slug.slice(1)} />;
    }

    // ✨ Default scroll path
    return <AphiScrollRouter slug={slug} />;
  }
}
