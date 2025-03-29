// app/aphi/[...slug]/page.tsx
import React from "react";
import { AphiScrollRouter } from "@iq/components/aphi/AphiScrollRouter";
import RitualLogViewer from "@/components/ritual/RitualLogViewer";


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
