import React from "react";
import { AphiHandler } from "./AphiHandler";

type Props = {
    slug: string[];
};

export class AphiScrollRouter extends React.Component<Props> {
    handler = new AphiHandler();

    render() {
        const [action, ...rest] = this.props.slug || [];

        const result = this.handler.route(action, rest);

        return (
            <div className="p-6">
                <h1 className="text-xl font-bold mb-2">🌀 Aphi Action: {action}</h1>
                <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify(result, null, 2)}</pre>
            </div>
        );
    }
}

export default AphiScrollRouter;
