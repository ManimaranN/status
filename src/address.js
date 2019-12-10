import React from "react";
import { Header, Segment, TransitionablePortal } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import "./address.css";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", latLng: {}, openSuggestions: false };
  }

  handleCloseSuggestions = () => {
    this.setState({
      openSuggestions: false
    });
  };

  handleChange = address => {
    this.setState({ address: address, openSuggestions: true });
    // if (address === "") {
    //   this.props.setAddress(address);
    // }

    console.log("changed", this.state.address);
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.setState({ latLng: latLng });
        this.props.setLat(latLng.lat);
        this.props.setLng(latLng.lng);
      })
      .catch(error => console.error("Error", error));
  };

  handleChangeInput = address => {
    this.setState({ address: address });
    this.props.setAddress(address);

    console.log("latLng saved", this.state.latLng);
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <textarea
              {...getInputProps({
                placeholder: " ",

                className: "location-search-input"
              })}
              onClick={event => event.stopPropagation()}
            />
            <TransitionablePortal
              onClose={this.handleCloseSuggestions}
              open={this.state.openSuggestions}
            >
              <Segment
                style={{
                  left: "2.5%",
                  position: "fixed",
                  top: "25%",
                  zIndex: 1000
                }}
              >
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#black", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    const handleSave = model => {
                      console.log("choosen address", model);
                      this.handleChangeInput(model);
                    };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                        style={{
                          marginLeft: "20px",
                          width: "50%",
                          cursor: "pointer"
                        }}
                      >
                        <span
                          onClick={() => handleSave(suggestion.description)}
                          className="choose_this_location"
                        >
                          {suggestion.description}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Segment>
            </TransitionablePortal>
            {/* <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                const handleSave = model => {
                  console.log("choosen address", model);
                  this.handleChangeInput(model);
                };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                    style={{
                      marginLeft: "20px",
                      width: "50%",
                      cursor: "pointer"
                    }}
                  >
                    <span onClick={() => handleSave(suggestion.description)}>
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div> */}
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
