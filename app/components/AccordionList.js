import * as React from "react";
import { List, Checkbox } from "react-native-paper";
import PriceSelect from "../components/FilterItems/PriceSelect";

class AccordionList extends React.Component {
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <List.Section
        style={{ backgroundColor: "transparent", width: "100%", zIndex: 1 }}
      >
        <List.Accordion
          title="Price"
          style={{ marginRight: 10, marginLeft: 14 }}
        >
          <PriceSelect />
        </List.Accordion>
      </List.Section>
    );
  }
}

export default AccordionList;
