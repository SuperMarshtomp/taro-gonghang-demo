import {
    Picker,
    View,
    Dimensions,
    Text,
    Alert,
    Button
} from 'react-native';
import Taro, { Component } from '@tarojs/taro'
import provice from '@utils/provice'

const { width } = Dimensions.get('window');

export default class RnProvicePicker extends Component{
    constructor (props) {
        super(props)

        let Provices = provice.map(item => item.name)
        let temp = provice[0].city
        let Citys = temp.map(item => item.name)
        let Districts = temp[0].districtAndCounty

        this.state = {
            Provices:Provices,
            Citys:Citys,
            Districts:Districts,
            tempCitys:[],
            selectedProvice: "",
            selectedCity: "",
            selectedDistrict: "",
        }
    }

    myInit() {
        var _this = this
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var region = _this.props.address.address.split("-")
                if (region != '请选择省市区' && region != null && region != 'null'){
                    _this.setState({
                        selectedProvice: region[0].trim(),
                        selectedCity: region[1].trim(),
                        selectedDistrict: region[2].trim()
                    },() => {
                        // let Provices = provice.map(item => item.name)
                        
                        let temp = provice.find(item => item.name == _this.state.selectedProvice).city
                        let Citys = temp.map(item => item.name)
                        let Districts = temp.find(item => item.name == _this.state.selectedCity).districtAndCounty
                        _this.setState({
                            tempCitys:temp,
                            Citys,
                            Districts
                        })
                    })
                }
            }, 1200)
            
        } )
        
    }

    async componentWillMount(){
        await this.myInit()
    }

    updateProvice(pro) {
        let temp = provice.find(item => item.name == pro).city
        let Citys = []
        Citys = temp.map(item => item.name)
        this.setState({
            selectedProvice:pro,
            Citys,
            tempCitys: temp
        },() => {
            this.props.onProviceChange(this.state.selectedProvice + ' - ' + this.state.Citys[0] + ' - ' + this.state.Districts[0])
        });
        // this.props.onProviceChange(pro)
    }

    updateCity(cit) {
        let Districts = this.state.tempCitys.find(item => item.name == cit).districtAndCounty
        this.setState({
            selectedCity:cit,
            Districts,
        },() => {
            this.props.onProviceChange(this.state.selectedProvice + ' - ' + this.state.selectedCity + ' - ' + this.state.Districts[0])
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
        return <Picker.Item key={key} label={value} value={value}/>
    }

    handleClick = () => {
        Alert.alert('here') 
        this.setState({
            selectedProvice:"内蒙古"
        },() => {
            Alert.alert(this.state.selectedProvice) 
        })
    }
    
    render() {
        return (
            <View style={{height:28, flexDirection: 'row', alignItems: 'center'}}>
                {/* <Button title={"单击"} onPress={this.handleClick.bind(this)} /> */}
                <Text>省:</Text>
                {/* <Text>{this.props.address[0]}</Text> */}
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
                    {this.state.Districts.map((key, i) => this.renderDataPicker(key, i))}
                </Picker>
                
            </View>
        );
    }
}