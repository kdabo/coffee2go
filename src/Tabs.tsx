import * as React from "react";

interface ITabsContext {
    activeName?: string;
    handleTabClick?: (name: string, content: React.ReactNode) => void;
}
const TabsContext = React.createContext<ITabsContext>({});

interface ITabProps {
    name: string;
    initialActive?: boolean;
    heading: () => string | JSX.Element;
}

interface Istate {
    activeTab: string;
    activeContent: React.ReactNode;
}


class Tabs extends React.Component<{}, Istate> {

    // react component props can be of any type, including React nodes. The children property is special property that React gives a component
    // that contains the component child nodes. We render component's child nodes in JSX by referencing the children property in curly brackets
    public static Tab: React.SFC<ITabProps> = props => (
        <TabsContext.Consumer>
            {
                (context: ITabsContext) => {
                    if (!context.activeName && props.initialActive) {
                        if (context.handleTabClick) {
                            context.handleTabClick(props.name, props.children);
                            return null;
                        }
                    }
                    const activeTab = context.activeName
                        ? context.activeName
                        : props.initialActive
                        ? props.name : "";
                    const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
                        console.log(e)
                        if (context.handleTabClick) {
                            context.handleTabClick(props.name, props.children)
                        }
                    };
                    return (
                        <li onClick={handleTabClick}
                            className={props.name === activeTab ? "active" : ""}>{props.heading()}</li>
                    )
                }
            }
        </TabsContext.Consumer>
    );

    private handleTabClick = (name: string, content: React.ReactNode) => {
        this.setState({activeTab: name, activeContent: content})
    };

    public render() {
        return (
            <TabsContext.Provider  value={ {activeName: this.state ? this.state.activeTab : "", handleTabClick: this.handleTabClick }}>
                <ul className="tabs">
                    {this.props.children}
                </ul>
                <div>{this.state && this.state.activeContent}</div>
            </TabsContext.Provider>
        )
    }
}

export default Tabs;