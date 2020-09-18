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
      <List.Section style={{ backgroundColor: "transparent", width: "100%" }}>
        <List.Accordion
          title="Price"
          left={(props) => <List.Icon {...props} />}
        >
          <PriceSelect />
        </List.Accordion>
      </List.Section>
    );
  }
}

export default AccordionList;
