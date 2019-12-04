import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import { Carousel } from "../../components/Carousel";
import { Todo } from "../../components/Todo";
import { DealsLead } from "../../components/DealsLead";
import { ErrorComponent } from "../../components/ErrorComponent";
import { getCarousel, getTodo, getDealLeads } from "../../modules/home/action";
import { Props } from "./interfaces";

class Home extends Component<Props> {
  componentDidMount() {
    Promise.all([
      this.props.getCarousel(),
      this.props.getTodo(),
      this.props.getDealLeads()
    ]);
  }

  render() {
    const {
      carousels,
      isFetchingCarousel,
      isFetchingErrorCarousel,
      todo,
      isFetchingTodo,
      isFetchingErrorTodo,
      dealsLead,
      isFetchingDealsLead,
      isFetchingErrorDealsLead
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <Image source={require("../../../assets/bee.png")} style={styles.bee} />
        <ScrollView style={styles.scrollViewContainer}>
          <Text style={styles.carouselTitle}>How you're doing</Text>
          {isFetchingErrorCarousel ? (
            <ErrorComponent
              name="Carousels"
              tryAgain={() => this.props.getCarousel()}
            />
          ) : isFetchingCarousel ? (
            <ActivityIndicator
              size="large"
              color="white"
              style={styles.activityIndicator}
            />
          ) : (
            <Carousel carousels={carousels} />
          )}

          {isFetchingErrorTodo ? (
            <ErrorComponent
              name="Todo List"
              tryAgain={() => this.props.getTodo()}
            />
          ) : isFetchingTodo ? (
            <ActivityIndicator
              size="large"
              color="white"
              style={styles.activityIndicator}
            />
          ) : (
            <Todo todo={todo} />
          )}

          {isFetchingErrorDealsLead ? (
            <ErrorComponent
              name="Deals and Lead"
              tryAgain={() => this.props.getDealLeads()}
            />
          ) : isFetchingDealsLead ? (
            <ActivityIndicator
              size="large"
              color="white"
              style={styles.activityIndicator}
            />
          ) : (
            <DealsLead
              dealsLead={dealsLead}
              navigation={this.props.navigation}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    carousels: state.homeReducer.carousels,
    isFetchingCarousel: state.homeReducer.isFetchingCarousel,
    isFetchingErrorCarousel: state.homeReducer.isFetchingErrorCarousel,
    todo: state.homeReducer.todo,
    isFetchingTodo: state.homeReducer.isFetchingTodo,
    isFetchingErrorTodo: state.homeReducer.isFetchingErrorTodo,
    dealsLead: state.homeReducer.dealsLead,
    isFetchingDealsLead: state.homeReducer.isFetchingDealsLead,
    isFetchingErrorDealsLead: state.homeReducer.isFetchingErrorDealsLead
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarousel: () => dispatch(getCarousel()),
    getTodo: () => dispatch(getTodo()),
    getDealLeads: () => dispatch(getDealLeads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
