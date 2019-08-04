import {
    Picker,
    View,
    Dimensions,
    Text,
    Alert
} from 'react-native';
import Taro, { Component } from '@tarojs/taro'

const {width,height} = Dimensions.get('window');

export default class RnTimePicker extends Component{
    constructor (props) {
        super(props)

        let currDate = new Date();
        let year = currDate.getFullYear();

        let years = [];
        for (let i = year; i<=year+50; i++){
            years.push(i.toString());
        }
        let months = [];
        for (let i = 1; i<13; i++){
            months.push(i.toString());
        }

        let day_28 =[],day_29 =[],day_30=[],day_31=[];
        for (let i=1;i<32;i++){
            if (i<29){
                day_28.push(i.toString())
            }
            if (i<30){
                day_29.push(i.toString())
            }
            if (i<31){
                day_30.push(i.toString())
            }
            if (i<32){
                day_31.push(i.toString())
            }
        }

        this.state = {
            years:years,
            months:months,
            days:day_31,
            day_28:day_28,
            day_29:day_29,
            day_30:day_30,
            day_31:day_31,

            selectedYear: year.toString(),
            selectedMonth: '1',
            selectedDay: '1',
            language: 'java',
        }
    }

    componentWillMount(){
        let value = this.props.date
        if (value != '请选择' && value != null && value != 'null'){
            let temp = value.split('-')
            this.setState({
                selectedYear: temp[0],
                selectedMonth: temp[1],
                selectedDay: temp[2]
            })
        }
    }

    updateYear(year) {

        this.judgeDay(year,this.state.selectedMonth);

        this.setState({
            selectedYear:year,
        });
        // this.props.selectedYear(year);
        // this.props.selectedDay(this.state.selectedDay)
    }

    updateMonth(month) {

        this.judgeDay(this.state.selectedYear,month);

        this.setState({
            selectedMonth:month,
        });
        // this.props.selectedMonth(month);
        // this.props.selectedDay(this.state.selectedDay)
    }

    updateDay(day) {

        this.setState({
            selectedDay: day
        },() => {
            this.props.selectedDate({
                detail:{
                value:this.state.selectedYear + '-' + this.state.selectedMonth + '-' + this.state.selectedDay
            }})
        })
        
    }

    judgeDay(year,month) {
        if (month === '2') {
            if (year%4 === 0){
                this.state.days = this.state.day_29;

                if (this.state.selectedDay*1 >29){
                    this.state.selectedDay = '1';
                }

            } else {
                this.state.days = this.state.day_28;

                if (this.state.selectedDay*1 >28){
                    this.state.selectedDay = '1';
                }
            }
        }else if (month*1 in {1:1,3:1,5:1,7:1,8:1,10:1,12:1}) {
            this.state.days = this.state.day_31
        }else {
            this.state.days = this.state.day_30;
            if (this.state.selectedDay*1 >30){
                this.state.selectedDay = '1';
            }
        }
    }

    renderDatePicker(value,key) {
        return <Picker.Item key={key} label={value} value={value}/>
    }
    
    render() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Picker style={{ width: width * 0.3}}
                        // itemStyle = {{textAlign:'justify'}}
                        selectedValue={this.state.selectedYear}
                        onValueChange={(year) => this.updateYear(year)}>
                    {this.state.years.map((key, i) => this.renderDatePicker(key, i))}
                </Picker>
                <Text>年</Text>
                <Picker style={{width: width * 0.2,}}
                        selectedValue={this.state.selectedMonth}
                        onValueChange={(month) => this.updateMonth(month)}>
                    {this.state.months.map((key, i) => this.renderDatePicker(key, i))}
                </Picker>
                <Text>月</Text>
                <Picker style={{width: width * 0.2,}}
                        selectedValue={this.state.selectedDay}
                        onValueChange={(day) => this.updateDay(day)}>
                    {this.state.days.map((key, i) => this.renderDatePicker(key, i))}
                </Picker>
                <Text>日</Text>
            </View>
        );
    }
}