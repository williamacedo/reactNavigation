import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Header, Footer, Body, Left, Right, Title, Container } from 'native-base';
import { Icon, Button } from 'react-native-elements';
import CartProdutos from '../components/CartProdutos';
import { CartEndereco, CartPagamento } from '../components/PaymentStepOne';


export default class CartTabs extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
    console.disableYellowBox = true;

    //window.cartNavigate = this.props.navigation;
  }

  render() {
    return(
      <Container>
        <Abas sceenProps={this.props.navigation.getParam('items')} /> // manda pras tabs mas retorna Undefined
        <Footer style={style.footer}>
          <Button
              small
              icon={{name:'minus-circle', type:'font-awesome'}}
              titleProps={this.state.valor}
              title="LIMPAR CARRINHO"
              backgroundColor='#D31E2C'
          />
          <Button
              small
              icon={{name:'check-circle', type:'font-awesome'}}
              titleProps={this.state.valor}
              title="FINALIZAR"
              backgroundColor='#6CAB3D'
              onPress={() => {alert(this.props.navigation.getParam('items'))}} // Retorna Object object , OK
          />          
        </Footer>
      </Container>
    );
  }
}

const Abas = createMaterialTopTabNavigator ({
  CartProdutos:{
    screen: CartProdutos
  },
  CartEndereco:{
    screen: CartEndereco
  },
  CartPagamento:{
    screen: CartPagamento
  }
},{
  tabBarOptions:{
    upperCaseLabel: false,
    showIcon: true,
    tabStyle:{
    marginTop:(Platform.OS === 'ios') ? 0 : 0,
    height : 60,
    flexDirection: 'row', 
  },
  style:{
    backgroundColor: '#d35400'
  },
  labelStyle:{
    fontSize: 15
  }
}
},{
  showIcon:true
});
