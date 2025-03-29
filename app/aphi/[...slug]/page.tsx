// app/aphi/[...slug]/page.tsx
import React from "react";
import { AphiScrollRouter } from "../../../components/aphi/AphiScrollRouter";

export default class AphiPage extends React.Component<{ params: { slug?: string[] } }> {
  render() {
    const slug = this.props.params?.slug || [];
    return <AphiScrollRouter slug={slug} />;
  }
}
