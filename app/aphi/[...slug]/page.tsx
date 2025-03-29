// app/aphi/[...slug]/page.tsx
import React from "react";
import { AphiScrollRouter } from "../../../components/aphi/AphiScrollRouter.tsx";
import {RitualLogViewer} from "../../..//components/rituals/RitualLogViewer";


export default class AphiPage extends React.Component<{ params: { slug?: string[] } }> {
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
