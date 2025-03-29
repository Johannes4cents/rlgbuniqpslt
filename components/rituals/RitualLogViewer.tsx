import React from "react";

type Props = {
  filePath: string;
  content: string;
};

export class RitualLogViewer extends React.Component<Props> {
  render() {
    const { filePath, content } = this.props;

    return (
      <div className="p-4 rounded-xl border border-neutral-300 bg-black text-green-400 font-mono whitespace-pre-wrap">
        <div className="text-xs text-neutral-400 mb-2">
          📜 Viewing scroll: <code>{filePath}</code>
        </div>
        <div>{content}</div>
      </div>
    );
  }
}
