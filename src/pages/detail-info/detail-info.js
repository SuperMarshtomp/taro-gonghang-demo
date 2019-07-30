import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Picker, Icon, Input } from '@tarojs/components'
import './detail-info.scss'

import Title from '@components/title'
import InfoSave from './info-save'
import RnTimePicker from './rn-time-picker'
import RnProvicePicker from './rn-provice-picker'
import { getWindowHeight } from '@utils/style'

import MyInput from '@components/my-input'
import MyRadio from '@components/my-radio'

import provice from '@utils/provice'

export default class DetailInfo extends Component {
    constructor (props) {
        super(props)

        this.state = {

            idCard: {
                name: 'idCard',
                radioName: '身份证到期日',
                radioList: ['手动输入', '长期有效'],
                finished: false,
                selected: -1
            },
            dueDate: {
                pickerName: '身份证到期日',
                finished: false,
                date: '请选择'
            },
            mariage: {
                name: 'mariage',
                radioName: '婚姻状况',
                finished: false,
                radioList: ['已婚', '未婚', '其他'],
                selected: -1
            },
            education: {
                name: 'education',
                radioName: '教育程度',
                finished: false,
                radioList: ['专科及以下', '本科', '硕士', '博士及以上'],
                selected: -1
            },
            house: {
                name: 'house',
                radioName: '住宅状况',
                finished: false,
                radioList: ['全款购房', '贷款购房', '租房', '其他'],
                selected: -1
            },
            houseAddress: {
                name: 'houseAddress',
                pickerName: '住宅地址',
                finished: false,
                address: '请选择省市区',
                addressIndex: [0, 0, 0],
                addressRange: [],
                detailAddress: ''
            },
            job: {
                name: 'job',
                radioName: '职业',
                finished: false,
                radioList: ['公司职员', '公务员', '事业单位员工', '金融单位员工', '军人', '学生', '自由职业者'],
                selected: -1
            },
            companyCharacter: {
                name: 'companyCharacter',
                radioName: '单位性质',
                finished: false,
                radioList: ['国有经济', '集体经济', '私营/民营', '股份制', '三资'],
                selected: -1
            },
            level: {
                name: 'level',
                radioName: '职务',
                finished: false,
                radioList: ['科员级/职员', '科级/部门经理', '县处级/总经理', '厅局级及以上/企业负责人', '其他'],
                selected: -1
            },
            companyName: {
                inputName: '单位名称',
                finished: false
            },
            companyAddress: {
                name: 'companyAddress',
                pickerName: '单位地址',
                finished: false,
                address: '请选择省市区',
                addressIndex: [0, 0, 0],
                addressRange: [],
                detailAddress: ''
            },
            companyPhone: {
                inputName: '单位电话',
                inputSubName: '(分机号选填)',
                finished: false,
                prefix: '',
                phone: '',
                suffix: ''
            },
            income: {
                inputName: '税前年收入',
                finished: false
            },
            contactsName: {
                inputName: '联系人姓名',
                finished: false
            },
            contactsPhone: {
                inputName: '联系人手机号',
                finished: false
            },
            relationship: {
                name: 'relationship',
                radioName: '与申请人关系',
                finished: false,
                radioList: ['夫妻', '父子', '母子', '兄弟姐妹', '同事', '朋友'],
                selected: -1
            },
            postalAddress: {
                name: 'postalAddress',
                radioName: '卡片邮寄地址',
                finished: false,
                radioList: ['单位地址', '住宅地址'],
                selected: -1
            },
    
            // 支付宝小程序 城市列表
            list: []
        }
    }

    componentWillMount() {
        // 地区选择器初始化
        let houseAddress = this.state.houseAddress;
        let addressRange = houseAddress.addressRange;

        let temp = [];
        for (let i = 0; i < provice.length; i++) {
            temp.push(provice[i].name);
        }
        addressRange.push(temp);
        temp = [];
        for (let i = 0; i < provice[0].city.length; i++) {
            temp.push(provice[0].city[i].name);
        }
        addressRange.push(temp);
        temp = [];
        for (let i = 0; i < provice[0].city[0].districtAndCounty.length; i++) {
            temp.push(provice[0].city[0].districtAndCounty[i]);
        }
        addressRange.push(temp);
        houseAddress.addressRange = addressRange;

        this.setState({
            houseAddress: houseAddress
        })


        // 简单复用住宅地址
        let companyAddress = this.state.companyAddress;
        companyAddress.addressRange = addressRange.slice(0);
        this.setState({
            companyAddress: companyAddress
        })


        // 支付宝小程序 地区列表
        let list = this.state.list;
        for (let i = 0; i < provice.length; i++) {
            let proviceTemp = Object.create(null);
            proviceTemp.name = provice[i].name;
            proviceTemp.subList = [];
            for (let j = 0; j < provice[i].city.length; j++) {
                let cityTemp = Object.create(null);
                cityTemp.name = provice[i].city[j].name;
                cityTemp.subList = [];
                for (let k = 0; k < provice[i].city[j].districtAndCounty.length; k++) {
                    let districtAndCountyTemp = Object.create(null);
                    districtAndCountyTemp.name = provice[i].city[j].districtAndCounty[k];
                    cityTemp.subList.push(districtAndCountyTemp);
                }
                proviceTemp.subList.push(cityTemp);
            }
            list.push(proviceTemp);
        }
        // console.log(list);
    }

    handleSaveClick = () => {
        console.log('handleSaveClick');
    }

    onRadioClick = (index, option) => {
        let temp = this.state[option];
        temp.selected = parseInt(index);
        temp.finished = true;
        switch (option) {
            case 'idCard':
                this.setState({
                    idCard: temp
                }, () => {console.log(this.state.idCard)});
                break;
            case 'mariage':
                this.setState({
                    mariage: temp
                }, () => {console.log(this.state.mariage)});
                break;
            case 'education':
                this.setState({
                    education: temp
                }, () => {console.log(this.state.education)});
                break;
            case 'house':
                this.setState({
                    house: temp
                }, () => {console.log(this.state.house)});
                break;
            case 'job':
                this.setState({
                    job: temp
                }, () => {console.log(this.state.job)});
                break;
            case 'companyCharacter':
                this.setState({
                    companyCharacter: temp
                }, () => {console.log(this.state.companyCharacter)});
                break;
            case 'level':
                this.setState({
                    level: temp
                }, () => {console.log(this.state.level)});
                break;
            case 'relationship':
                this.setState({
                    relationship: temp
                }, () => {console.log(this.state.relationship)});
                break;
            case 'postalAddress':
                this.setState({
                    postalAddress: temp
                }, () => {console.log(this.state.postalAddress)});
                break;
        }
    }

    onDueDateChange = (e) => {
        let temp = this.state.dueDate;
        temp.finished = true;
        temp.date = e.detail.value;
        this.setState({
            dueDate: temp
        }, () => {console.log(this.state.dueDate)} )
    }

    // 支付宝小程序
    onHouseAddressClick = (option) => {
        let temp = this.state[option];
        if (option == 'houseAddress') {
            my.multiLevelSelect({
                list: this.state.list,
                success: (result) => {
                    if (result.success) {
                        temp.address = result.result[0].name + ' - ' + result.result[1].name + ' - ' + result.result[2].name;
                        this.setState({
                            houseAddress: temp
                        }, () => { console.log(this.state.houseAddress) })
                    }
                }
            })
        } else {
            my.multiLevelSelect({
                list: this.state.list,
                success: (result) => {
                    if (result.success) {
                        temp.address = result.result[0].name + ' - ' + result.result[1].name + ' - ' + result.result[2].name;
                        this.setState({
                            companyAddress: temp
                        }, () => { console.log(this.state.companyAddress) })
                    }
                }
            })
        }
    }

    onHouseAddressChange = (option, e) => {
        let temp = this.state[option];
        temp.addressIndex = e.detail.value;
        temp.address = temp.addressRange[0][temp.addressIndex[0]] + ' - ' + temp.addressRange[1][temp.addressIndex[1]] + ' - ' + temp.addressRange[2][temp.addressIndex[2]];
        if (option == 'houseAddress') {
            this.setState({
                houseAddress: temp
            }, () => { console.log(this.state.houseAddress) })
        } else {
            this.setState({
                companyAddress: temp
            }, () => { console.log(this.state.companyAddress) })
        }
    }

    onHouseAddressColumnChange = (option, e) => {
        let temp = this.state[option];
        let column = e.detail.column;
        let row = e.detail.value;

        temp.addressIndex[column] = row;

        switch (column) {
            case 0:
                let t1 = [];
                let t2 = [];
                for (let i = 0; i < provice[row].city.length; i++) {
                    t1.push(provice[row].city[i].name);
                }
                for (let i = 0; i < provice[row].city[0].districtAndCounty.length; i++) {
                    t2.push(provice[row].city[0].districtAndCounty[i]);
                }
                temp.addressIndex[1] = 0;
                temp.addressIndex[2] = 0;
                temp.addressRange[1] = t1;
                temp.addressRange[2] = t2;
                break;
            case 1:
                let t = [];
                for (let i = 0; i < provice[temp.addressIndex[0]].city[row].districtAndCounty.length; i++) {
                    t.push(provice[temp.addressIndex[0]].city[row].districtAndCounty[i]);
                }
                temp.addressIndex[2] = 0;
                temp.addressRange[2] = t;
                break;
            case 2:
                break;
        }

        if (option == 'houseAddress') {
            this.setState({
                houseAddress: temp
            }, () => { console.log(this.state.houseAddress) })
        } else {
            this.setState({
                companyAddress: temp
            }, () => { console.log(this.state.companyAddress) })
        }
    }

    onHouseDetailAddressInput = (option, e) => {
        let temp = this.state[option];
        if (e.detail.value != '' && temp.address != '请选择省市区') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        if (option == 'houseAddress') {
            this.setState({
                houseAddress: temp
            }, () => { console.log(this.state.houseAddress) })
        } else {
            this.setState({
                companyAddress: temp
            }, () => { console.log(this.state.companyAddress) })
        }
    }

    onInput = (option, e) => {
        let temp = this.state[option];
        if (e.detail.value != '') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        switch (option) {
            case 'companyName':
                this.setState({
                    companyName: temp
                }, () => {console.log(this.state.companyName)})
                break;
            case 'income':
                this.setState({
                    income: temp
                }, () => {console.log(this.state.income)})
                break;
            case 'contactsName':
                this.setState({
                    contactsName: temp
                }, () => {console.log(this.state.contactsName)})
                break;
            case 'contactsPhone':
                this.setState({
                    contactsPhone: temp
                }, () => {console.log(this.state.contactsPhone)})
                break;
        }
    }

    // 单位电话
    onCompanyPhoneInput = (option, e) => {
        let temp = this.state.companyPhone;
        temp[option] = e.detail.value;
        if (temp.prefix != '' && temp.phone != '' && temp.suffix != '') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        this.setState({
            companyPhone: temp
        }, () => { console.log(this.state.companyPhone) });
    }

    onConfirmClick = () => {
        console.log('onConfirmClick');
        Taro.navigateTo({
            url: '/pages/success-info/success-info'
        })
    }

    

    render () {
        const scrollHeight = parseInt(getWindowHeight()) - 145;

        return (
            <View className='detail-info'>
            {/* <RnTimePicker></RnTimePicker> */}
                {process.env.TARO_ENV === 'h5' ? <Title /> : <View />}
                <InfoSave onClick={this.handleSaveClick} />
                <ScrollView scrollY style={process.env.TARO_ENV === 'rn' ? { height: scrollHeight + 55 } : process.env.TARO_ENV === 'h5' ? { height: (scrollHeight + 'px') } : { height: (scrollHeight + 45 + 'px') }}>
                    <View>
                        <View className='info-input-pinyin'>
                            <View className='info-input-pinyin-content'>
                                <Text className='info-input-pinyin-content-txt'>姓名拼音</Text>
                                <Text className='info-input-pinyin-content-txt'>CHEN XU TAO</Text>
                            </View>
                            <View className='info-input-pinyin-warn'>
                                <Text className='info-input-pinyin-warn-txt'>请核对，可修改，每字间请以单个空格隔开</Text>
                            </View>
                        </View>

                        {/* 身份证到期日 */}
                        <MyRadio radioInfo={this.state.idCard} onRadioClick={this.onRadioClick} />
                        {
                            this.state.idCard.selected == 0
                            ? 
                            <View className= { process.env.TARO_ENV !== 'rn' ? 'info-input-date':'info-input-date-rn'}>
                                
                                { process.env.TARO_ENV !== 'rn' ? 
                                (<View>
                                    <View className='info-input-date-name'>
                                        <Text className='info-input-date-name-txt'>{this.state.dueDate.pickerName}</Text>
                                        {this.state.dueDate.finished ? <Icon size='18' type='success' className='detail-info-icon' color='#09BB07'></Icon> : <Text></Text>}
                                    </View>
                                    <View className={this.state.dueDate.date == '请选择'
                                                    ? 'info-input-date-picker'
                                                    : 'info-input-date-picker info-input-date-picker-black'}
                                    >
                                        <Picker mode='date' onChange={this.onDueDateChange}>
                                            <View>
                                                <Text>{this.state.dueDate.date}</Text>
                                            </View>
                                        </Picker>
                                    </View>
                                </View>):
                                (<View>
                                    <View className='info-input-date-rn-name'>
                                        <Text className='info-input-date-rn-name-txt'>{this.state.dueDate.pickerName}</Text>
                                        {this.state.dueDate.finished ? <Icon size='18' type='success' className='detail-info-icon' color='#09BB07'></Icon> : <Text></Text>}
                                    </View>
                                    <RnTimePicker></RnTimePicker>
                                </View>)
                                }
                                
                            </View>
                            : <View></View>
                        }

                        <MyRadio radioInfo={this.state.mariage} onRadioClick={this.onRadioClick} />
                        <MyRadio radioInfo={this.state.education} onRadioClick={this.onRadioClick} />

                        <MyRadio radioInfo={this.state.house} onRadioClick={this.onRadioClick} />
                        <View className='info-input-house-address'>
                            <View className='info-input-house-address-title'>
                                <Text className='info-input-house-address-title-txt'>{this.state.houseAddress.pickerName}</Text>
                                {this.state.houseAddress.finished ? <Icon size='18' type='success' className={process.env.TARO_ENV === 'tt' ? 'detail-info-icon-tt' : 'detail-info-icon'} color='#09BB07'></Icon> : <Text></Text>}
                            </View>
                            {
                                process.env.TARO_ENV === 'alipay'
                                ?
                                <View>
                                    <View className={this.state.houseAddress.address == '请选择省市区'
                                                ? 'info-input-house-address-picker'
                                                : 'info-input-house-address-picker-black'}
                                      onClick={this.onHouseAddressClick.bind(this, this.state.houseAddress.name)}
                                    >
                                        <View className='info-input-house-address-selected'>
                                            <View className='info-input-house-address-selected-name'>
                                                <Text>{this.state.houseAddress.address}</Text>
                                            </View>
                                            <View className='info-input-house-address-selected-icon'>
                                                <Text className='info-input-house-address-selected-icon-ins'>{'>'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                : process.env.TARO_ENV === 'rn' ? 
                                <View>
                                    <RnProvicePicker></RnProvicePicker>
                                </View>
                                :<View className={this.state.houseAddress.address == '请选择省市区'
                                                ? 'info-input-house-address-picker'
                                                : 'info-input-house-address-picker-black'}
                                >
                                    <Picker
                                      mode='multiSelector' 
                                      onChange={this.onHouseAddressChange.bind(this, this.state.houseAddress.name)}
                                      onColumnChange={this.onHouseAddressColumnChange.bind(this, this.state.houseAddress.name)}
                                      range={this.state.houseAddress.addressRange}
                                      value={this.state.houseAddress.addressIndex}
                                    >
                                        <View className='info-input-house-address-selected'>
                                            <View className='info-input-house-address-selected-name'>
                                                <Text>{this.state.houseAddress.address}</Text>
                                            </View>
                                            <View className='info-input-house-address-selected-icon'>
                                                <Text className='info-input-house-address-selected-icon-ins'>{'>'}</Text>
                                            </View>
                                        </View>
                                    </Picker>
                                </View>
                            }
                            <View>
                                <Input 
                                  className='info-input-house-address-input' 
                                  type='text' 
                                  placeholder='请具体到门牌号且不少于3个字'
                                  onInput={this.onHouseDetailAddressInput.bind(this, this.state.houseAddress.name)}
                                />
                            </View>
                        </View>

                        <MyRadio radioInfo={this.state.job} onRadioClick={this.onRadioClick} />
                        <MyRadio radioInfo={this.state.companyCharacter} onRadioClick={this.onRadioClick} />
                        <MyRadio radioInfo={this.state.level} onRadioClick={this.onRadioClick} />

                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.companyName.inputName} 
                              type='text' 
                              finished={this.state.companyName.finished}
                              onInput={this.onInput.bind(this, 'companyName')}
                            />
                        </View>
                        {/* 单位地址--简单复用住宅地址 */}
                        <View className='info-input-house-address'>
                            <View className='info-input-house-address-title'>
                                <Text className='info-input-house-address-title-txt'>{this.state.companyAddress.pickerName}</Text>
                                {this.state.companyAddress.finished ? <Icon size='18' type='success' className={process.env.TARO_ENV === 'tt' ? 'detail-info-icon-tt' : 'detail-info-icon'} color='#09BB07'></Icon> : <Text></Text>}
                            </View>
                            {
                                process.env.TARO_ENV === 'alipay'
                                ?
                                <View>
                                    <View className={this.state.companyAddress.address == '请选择省市区'
                                                ? 'info-input-house-address-picker'
                                                : 'info-input-house-address-picker-black'}
                                      onClick={this.onHouseAddressClick.bind(this, this.state.companyAddress.name)}
                                    >
                                        <View className='info-input-house-address-selected'>
                                            <View className='info-input-house-address-selected-name'>
                                                <Text>{this.state.companyAddress.address}</Text>
                                            </View>
                                            <View className='info-input-house-address-selected-icon'>
                                                <Text className='info-input-house-address-selected-icon-ins'>{'>'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                : process.env.TARO_ENV === 'rn' ? 
                                <View>
                                    <RnProvicePicker></RnProvicePicker>
                                </View>
                                :
                                <View className={this.state.companyAddress.address == '请选择省市区'
                                                ? 'info-input-house-address-picker'
                                                : 'info-input-house-address-picker-black'}
                                >
                                    <Picker
                                      mode='multiSelector' 
                                      onChange={this.onHouseAddressChange.bind(this, this.state.companyAddress.name)}
                                      onColumnChange={this.onHouseAddressColumnChange.bind(this, this.state.companyAddress.name)}
                                      range={this.state.companyAddress.addressRange}
                                      value={this.state.companyAddress.addressIndex}
                                    >
                                        <View className='info-input-house-address-selected'>
                                            <View className='info-input-house-address-selected-name'>
                                                <Text>{this.state.companyAddress.address}</Text>
                                            </View>
                                            <View className='info-input-house-address-selected-icon'>
                                                <Text className='info-input-house-address-selected-icon-ins'>{'>'}</Text>
                                            </View>
                                        </View>
                                    </Picker>
                                </View>
                            }
                            <View>
                                <Input 
                                  className='info-input-house-address-input' 
                                  type='text' 
                                  placeholder='请具体到门牌号且不少于3个字'
                                  onInput={this.onHouseDetailAddressInput.bind(this, this.state.companyAddress.name)}
                                />
                            </View>
                        </View>

                        {/* 单位电话 */}
                        <View className='info-input-company-phone'>
                            <View className='info-input-company-phone-name'>
                                <View className='info-input-company-phone-name-super'>
                                    <Text className='info-input-company-phone-txt'>{this.state.companyPhone.inputName}</Text>
                                    {this.state.companyPhone.finished ? <Icon size='18' type='success' className='info-input-company-phone-icon' color='#09BB07'></Icon> : <Text></Text>}
                                </View>
                                <View>
                                    <Text className='info-input-company-phone-name-sub'>{this.state.companyPhone.inputSubName}</Text>
                                </View>
                            </View>
                            <View className='info-input-company-phone-prefix-view'>
                                <Input 
                                  type='number' 
                                  placeholder='区号' 
                                  className='info-input-company-phone-prefix' 
                                  onInput={this.onCompanyPhoneInput.bind(this, 'prefix')}
                                />
                            </View>
                            <View className='info-input-company-phone-divide'>
                                <Text  className='info-input-company-phone-divide-txt'>-</Text>
                            </View>
                            <View className='info-input-company-phone-phone-view'>
                                <Input 
                                  type='number' 
                                  placeholder='电话号' 
                                  className='info-input-company-phone-phone' 
                                  onInput={this.onCompanyPhoneInput.bind(this, 'phone')}
                                />
                            </View>
                            <View className='info-input-company-phone-divide'>
                                <Text className='info-input-company-phone-divide-txt'>-</Text>
                            </View>
                            <View className='info-input-company-phone-suffix-view'>
                                <Input 
                                  type='number' 
                                  placeholder='分机号' 
                                  className='info-input-company-phone-suffix' 
                                  onInput={this.onCompanyPhoneInput.bind(this, 'suffix')}
                                />
                            </View>
                        </View>

                        {/* 税前年收入 */}
                        <View className='info-input-item info-input-income'>
                            <View className='info-input-income-input'>
                                <MyInput 
                                  inputName={this.state.income.inputName}
                                  type='number' 
                                  finished={this.state.income.finished}
                                  onInput={this.onInput.bind(this, 'income')}
                                  noPlaceholder
                                />
                            </View>
                            <View className='info-input-income-unit'><Text className='info-input-income-unit-txt'>万元</Text></View>
                        </View>

                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.contactsName.inputName} 
                              type='text' 
                              finished={this.state.contactsName.finished} 
                              onInput={this.onInput.bind(this, 'contactsName')}
                            />
                        </View>
                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.contactsPhone.inputName} 
                              type='number' 
                              finished={this.state.contactsPhone.finished} 
                              onInput={this.onInput.bind(this, 'contactsPhone')}
                            />
                        </View>
                        <MyRadio radioInfo={this.state.relationship} onRadioClick={this.onRadioClick} />
                        <MyRadio radioInfo={this.state.postalAddress} onRadioClick={this.onRadioClick} />

                        {/* 提交申请按钮 */}
                        <View className='info-input-confirm-btn' onClick={this.onConfirmClick}>
                            <Text className='info-input-confirm-btn-txt'>
                                提交申请
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}