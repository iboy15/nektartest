import React, { Component } from "react";
import { Text, View, StatusBar, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { getDetails } from "../../modules/Detail/action";
import { Props } from "./interfaces";
import { Todo } from "../../components/Todo";

class Detail extends Component<Props> {
  componentDidMount() {
    const { data } = this.props.navigation.state.params;
    this.props.getDetails(data.name);
  }

  render() {
    const { data } = this.props.navigation.state.params;
    const { details, navigation, isFetchingDetails } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Header
          title={data.name}
          avatar={data.avatar}
          navigation={navigation}
        />
        {isFetchingDetails ? (
          <ActivityIndicator
            size="large"
            color="white"
            style={styles.activityIndicator}
          />
        ) : (
          <Todo todo={details} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.detailReducer.details,
    isFetchingDetails: state.detailReducer.isFetchingDetails,
    isFetchingErrorDetails: state.detailReducer.isFetchingErrorDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetails: name => dispatch(getDetails(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
