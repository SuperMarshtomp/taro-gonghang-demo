import {
    Picker,
    View,
    Dimensions,
    Text,
    Alert
} from 'react-native';
import Taro, { Component } from '@tarojs/taro'
import provice from '@utils/provice'

const { width } = Dimensions.get('window');

export default class RnProvicePicker extends Component{
    constructor (props) {
        super(props)

        this.state = {
            Provices:provice,
            Citys:[],
            Districts:[],

            selectedProvice: "",
            selectedCity: "",
            selectedDistrict: "",
        }
    }

    updateProvice(pro) {

        this.setState({
            selectedProvice:pro,
            Citys:provice.find(item => item.name == pro).city
        });
        // this.props.onProviceChange(pro)
    }

    updateCity(cit) {

        this.setState({
            selectedCity:cit,
            Districts:this.state.Citys.find(item => item.name == cit).districtAndCounty
        });
        // this.props.onProviceChange(this.state.Provices + cit)
    }

    updateDistrict(dis) {

        this.setState({
            selectedDistrict: dis
        },() => {
            this.props.onProviceChange(this.state.selectedProvice + ' - ' + this.state.selectedCity + ' - ' + this.state.selectedDistrict)
        });
        
    }

    renderDataPicker(value,key) {
        return <Picker.Item key={key} label={value.name} value={value.name}/>
    }
    
    render() {
        return (
            <View style={{height:28, flexDirection: 'row', alignItems: 'center'}}>
                <Text>省:</Text>
                <Picker style={{ width: width * 0.28}}
                        // itemStyle = {{textAlign:'justify'}}
                        selectedValue={this.state.selectedProvice}
                        onValueChange={(pro) => this.updateProvice(pro)}>
                    {this.state.Provices.map((key, i) => this.renderDataPicker(key, i))}
                </Picker>
                <Text>市:</Text>
                <Picker style={{width: width * 0.28}}
                        selectedValue={this.state.selectedCity}
                        onValueChange={(cit) => this.updateCity(cit)}>
                    {this.state.Citys.map((key, i) => this.renderDataPicker(key, i))}
                </Picker>
                <Text>区:</Text>
                <Picker style={{width: width * 0.28}}
                        selectedValue={this.state.selectedDistrict}
                        onValueChange={(dis) => this.updateDistrict(dis)}>
                    {this.state.Districts.map((value, key) => <Picker.Item key={key} label={value} value={value}/>)}
                </Picker>
                
            </View>
        );
    }
}