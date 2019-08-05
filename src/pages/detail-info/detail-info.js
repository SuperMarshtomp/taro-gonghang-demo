import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Picker, Icon, Input, Image } from '@tarojs/components'
import './detail-info.scss'

import Title from '@components/title'
import InfoSave from './info-save'
import RnTimePicker from './rn-time-picker'
import RnProvicePicker from './rn-provice-picker'
import { getWindowHeight } from '@utils/style'
import MyInput from '@components/my-input'
import MyRadio from '@components/my-radio'

import provice from '@utils/provice'

import { LOCAL_HOST, fetch } from '@server'
import successIcon from '../../img/successIcon.png'

export default class DetailInfo extends Component {
    constructor (props) {
        super(props)

        let addressRange = []
        let Provices = provice.map(item => item.name)
        addressRange.push(Provices);
        let temp = provice[0].city
        let Citys = temp.map(item => item.name)
        addressRange.push(Citys);
        let Districts = temp[0].districtAndCounty
        addressRange.push(Districts);

        let addressRangeCom = addressRange.concat()
        let addressRangeCom1 = addressRange.concat()

        this.userIdCard = this.$router.params.userIdCard

        this.state = {
            userSpell: '',

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
                addressRange: addressRangeCom,
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
                radioList: ['科员级/职员', '科级/部门经理', '县处级/总经理', '厅局级及以上', '其他'],
                selected: -1
            },
            companyName: {
                inputName: '单位名称',
                finished: false,
                value: ''
            },
            companyAddress: {
                name: 'companyAddress',
                pickerName: '单位地址',
                finished: false,
                address: '请选择省市区',
                addressIndex: [0, 0, 0],
                addressRange: addressRangeCom1,
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
                finished: false,
                value: ''
            },
            contactsName: {
                inputName: '联系人姓名',
                finished: false,
                value: ''
            },
            contactsPhone: {
                inputName: '联系人手机号',
                finished: false,
                value: ''
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

    setRadioSelected (radio, value) {
        if (radio === 'idCard') {
            
            if (value == '长期有效') {
                let temp = this.state.idCard;
                temp.finished = true;
                temp.selected = 1;
                this.setState({
                    idCard: temp
                })
            } else if (value != '请选择' && value != null && value != 'null') {
                let temp = this.state.idCard;
                temp.finished = true;
                temp.selected = 0;
                let temp2 = this.state.dueDate;
                temp2.date = value;
                temp2.finished = true;
                this.setState({
                    idCard: temp,
                    dueDate: temp2
                })
            }
        } else {
            if (value != 'null' && value != null) {
                for (let i = 0; i < this.state[radio].radioList.length; i++) {
                    if (this.state[radio].radioList[i] == value) {
                        let temp = this.state[radio];
                        temp.finished = true;
                        temp.selected = i;
                        this.setState({
                            [radio]: temp
                        })
                    }
                }
            }
        }
    }

    setMyInput (myInput, value) {
        if (value != 'null' && value != null) {
            let temp = this.state[myInput];
            temp.value = value;
            temp.finished = true;
            this.setState({
                [myInput]: temp
            })
        }
    }

    setAddress (option, region, detailAddress) {
        if (region != '请选择省市区' && region != null && region != 'null') {
            let temp = this.state[option];
            temp.address = region;
            if (detailAddress != null && detailAddress != 'null'){
                temp.finished = true;
                temp.detailAddress = detailAddress;
            }
            this.setState({
                [option]: temp
            })
        }      
    }

    setPhone (prefix, phone, suffix) {
        let temp = this.state.companyPhone;
        if (prefix != 'null' && prefix != null) {
            temp.prefix = prefix;
        }
        if (phone != 'null' && phone != null) {
            temp.phone = phone;
        }
        if (suffix != 'null' && suffix != null) {
            temp.suffix = suffix;
        }
        if (prefix != 'null' && prefix != null && phone != 'null' && phone != null && suffix != 'null' && suffix != null) {
            temp.finished = true;
        }
        this.setState({
            companyPhone: temp
        })
    }

    // 获取用户详细信息
    getDetailInfo () {
        if (LOCAL_HOST !== 'null') {
            fetch({
                url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/usersInquires`,
                payload: {
                    sessionId: '1',
                    userIdCard: this.userIdCard
                }
            }).then((res) => {
                console.log(res);
                let { userSpell, userIdDeadline, maritalStatus, educationStatus, liveStatus,
                    liveAddress, liveAddressSelect, profession, companyProperty, duty, 
                    companyName, companyAddress, companyAddressSelect,
                    companyPhoneA, companyPhoneB, companyPhoneC,
                    income, contactName, contactPhone, contactRelation, mailAddress } = res;
                this.setAddress('houseAddress', liveAddressSelect, liveAddress);
                this.setAddress('companyAddress', companyAddressSelect, companyAddress);
                this.setRadioSelected('idCard', userIdDeadline);
                this.setRadioSelected('mariage', maritalStatus);
                this.setRadioSelected('education', educationStatus);
                this.setRadioSelected('house', liveStatus);
                this.setRadioSelected('job', profession);
                this.setRadioSelected('companyCharacter', companyProperty);
                this.setRadioSelected('level', duty);
                this.setRadioSelected('relationship', contactRelation);
                this.setRadioSelected('postalAddress', mailAddress);

                this.setMyInput('companyName', companyName);
                this.setMyInput('income', income);
                this.setMyInput('contactsName', contactName);
                this.setMyInput('contactsPhone', contactPhone);

                this.setPhone(companyPhoneA, companyPhoneB, companyPhoneC);

                this.setState({
                    userSpell: userSpell,
                })
            })
        }
    }

    componentWillMount() {

        this.getDetailInfo()

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
    }

    componentDidMount() {
        // 获取用户详细信息
        // this.setState({
        //     userIdCard: this.$router.params.userIdCard
        // }, () => {this.getDetailInfo()})
    }

    // 保存信息
    saveDetailInfo () {
        if (this.state.idCard.selected == 1) {
            let temp = this.state.dueDate;
            temp.date = '长期有效';
            this.setState({
                dueDate: temp
            })
        }
        if (LOCAL_HOST !== 'null') {
            fetch({
                url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/users`,
                payload: {
                    sessionId: '1',
                    userIdCard: this.$router.params.userIdCard,
                    userSpell: this.state.userSpell,
                    userIdDeadline: this.state.dueDate.date || 'null',
                    maritalStatus: this.state.mariage.radioList[this.state.mariage.selected] || 'null',
                    educationStatus: this.state.education.radioList[this.state.education.selected] || 'null',
                    liveStatus: this.state.house.radioList[this.state.house.selected] || 'null',
                    liveAddress: this.state.houseAddress.detailAddress || 'null',
                    liveAddressSelect: this.state.houseAddress.address || 'null',
                    profession: this.state.job.radioList[this.state.job.selected] || 'null',
                    companyProperty: this.state.companyCharacter.radioList[this.state.companyCharacter.selected] || 'null',
                    duty: this.state.level.radioList[this.state.level.selected] || 'null',
                    companyName: this.state.companyName.value || 'null',
                    companyAddress: this.state.companyAddress.detailAddress || 'null',
                    companyAddressSelect: this.state.companyAddress.address || 'null',
                    companyPhoneA: this.state.companyPhone.prefix || 'null',
                    companyPhoneB: this.state.companyPhone.phone || 'null',
                    companyPhoneC: this.state.companyPhone.suffix || 'null',
                    income: this.state.income.value || 'null',
                    contactName: this.state.contactsName.value || 'null',
                    contactPhone: this.state.contactsPhone.value || 'null',
                    contactRelation: this.state.relationship.radioList[this.state.relationship.selected] || 'null',
                    mailAddress: this.state.postalAddress.radioList[this.state.postalAddress.selected] || 'null'
                }
            }).then((res) => {
                console.log(res);
                Taro.showToast({
                    title: '保存信息成功'
                })
            })
        }
    }
    handleSaveClick = () => {
        console.log('handleSaveClick');
        this.saveDetailInfo();
    }

    onRadioClick = (index, option) => {
        let temp = this.state[option];
        temp.selected = parseInt(index);
        temp.finished = true;
        this.setState({
            [option]: temp
        }, () => {console.log(this.state)});
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
        temp.detailAddress = e.detail.value;
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
            temp.value = e.detail.value;
        } else {
            temp.finished = false;
            temp.value = '';
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


    finishAll () {
        let infoArray = ['idCard', 'mariage', 'education', 'house', 'job', 'houseAddress',
            'companyCharacter','level', 'companyName', 'companyAddress', 'companyPhone', 
            'income', 'contactsName', 'contactsPhone', 'relationship', 'postalAddress'];
        for (let i = 0; i < infoArray.length; i++) {
            if (!this.state[infoArray[i]].finished) {
                return false;
            }
        }
        if (this.state.idCard.selected == 0) {
            if (!this.state.dueDate.finished) {
                return false;
            }
        }
        return true;
    }
    // 提交申请
    submitDetailInfo () {
        if (LOCAL_HOST !== 'null') {
            if (this.finishAll()) {
                if (this.state.idCard.selected == 1) {
                    let temp = this.state.dueDate;
                    temp.date = '长期有效';
                    this.setState({
                        dueDate: temp
                    })
                }
                fetch({
                    url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/userSubmits`,
                    payload: {
                        sessionId: '1',
                        userIdCard: this.$router.params.userIdCard,
                        userSpell: this.state.userSpell,
                        userIdDeadline: this.state.dueDate.date,
                        maritalStatus: this.state.mariage.radioList[this.state.mariage.selected],
                        educationStatus: this.state.education.radioList[this.state.education.selected],
                        liveStatus: this.state.house.radioList[this.state.house.selected],
                        liveAddress: this.state.houseAddress.detailAddress,
                        liveAddressSelect: this.state.houseAddress.address,
                        profession: this.state.job.radioList[this.state.job.selected],
                        companyProperty: this.state.companyCharacter.radioList[this.state.companyCharacter.selected],
                        duty: this.state.level.radioList[this.state.level.selected],
                        companyName: this.state.companyName.value,
                        companyAddress: this.state.companyAddress.detailAddress,
                        companyAddressSelect: this.state.companyAddress.address,
                        companyPhoneA: this.state.companyPhone.prefix,
                        companyPhoneB: this.state.companyPhone.phone,
                        companyPhoneC: this.state.companyPhone.suffix,
                        income: this.state.income.value,
                        contactName: this.state.contactsName.value,
                        contactPhone: this.state.contactsPhone.value,
                        contactRelation: this.state.relationship.radioList[this.state.relationship.selected],
                        mailAddress: this.state.postalAddress.radioList[this.state.postalAddress.selected]
                    }
                }).then((res) => {
                    console.log(res);
                    Taro.navigateTo({
                        url: '/pages/success-info/success-info?userIdCard=' + this.userIdCard
                    })
                })
            } else {
                Taro.showToast({
                    title: '信息未填写完整',
                    icon: 'none'
                })
            }
        }
    }
    onConfirmClick = () => {
        console.log('onConfirmClick');
        this.submitDetailInfo();
    }

    onProviceChange = (data) => {
        let temp = this.state.houseAddress
        temp.address = data
        this.setState({
            houseAddress:temp
        })
    }

    onConProviceChange = (data) => {
        let temp = this.state.companyAddress
        temp.address = data 
        this.setState({
            companyAddress:temp
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
                                <Text className='info-input-pinyin-content-txt'>{this.state.userSpell}</Text>
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
                            <View>
                                { process.env.TARO_ENV !== 'rn' ? 
                                (<View className='info-input-date'>
                                    <View className='my-info-input-house-address-title'>
                                        <View className='my-info-input-house-address-title-name'>
                                            <Text className='my-info-input-house-address-title-name-txt'>{this.state.dueDate.pickerName}</Text>
                                        </View>
                                        <View className='my-info-input-house-address-title-img'>
                                            { 
                                                this.state.dueDate.finished
                                                    ? <Image 
                                                      src={successIcon} 
                                                      className={
                                                            process.env.TARO_ENV === 'h5' 
                                                            ? 'my-info-input-house-address-title-img-icon'
                                                            : 'my-info-input-house-address-title-img-icon-weapp'  
                                                            }
                                                    />
                                                    : null
                                            }
                                        </View>
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
                                (<View className='info-input-date-rn'>
                                    <View className='my-info-input-house-address-title'>
                                        <View className='my-info-input-house-address-title-name'>
                                            <Text className='my-info-input-house-address-title-name-txt'>{this.state.dueDate.pickerName}</Text>
                                        </View>
                                        <View className='my-info-input-house-address-title-img'>
                                            { 
                                                this.state.dueDate.finished
                                                    ? <Image 
                                                      src={successIcon} 
                                                      className={
                                                            process.env.TARO_ENV === 'h5' 
                                                            ? 'my-info-input-house-address-title-img-icon'
                                                            : 'my-info-input-house-address-title-img-icon-weapp'  
                                                            }
                                                    />
                                                    : null
                                            }
                                        </View>
                                    </View>
                                    <RnTimePicker selectedDate = {this.onDueDateChange.bind(this)} date={this.state.dueDate.date}></RnTimePicker>
                                </View>)
                                }
                                
                            </View>
                            : <View></View>
                        }

                        <MyRadio radioInfo={this.state.mariage} onRadioClick={this.onRadioClick} />
                        <MyRadio radioInfo={this.state.education} onRadioClick={this.onRadioClick} />

                        <MyRadio radioInfo={this.state.house} onRadioClick={this.onRadioClick} />
                        <View className='info-input-house-address'>
                            <View className='my-info-input-house-address-title'>
                                <View className='my-info-input-house-address-title-name'>
                                    <Text className='my-info-input-house-address-title-name-txt'>{this.state.houseAddress.pickerName}</Text>
                                </View>
                                <View className='my-info-input-house-address-title-img'>
                                    { 
                                        this.state.houseAddress.finished
                                            ? <Image 
                                              src={successIcon} 
                                              className={
                                                    process.env.TARO_ENV === 'h5' 
                                                    ? 'my-info-input-house-address-title-img-icon'
                                                    : 'my-info-input-house-address-title-img-icon-weapp'  
                                                    }
                                            />
                                            : null
                                    }
                                </View>
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
                                    <RnProvicePicker onProviceChange={this.onProviceChange.bind(this)} address={this.state.houseAddress}></RnProvicePicker>
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
                                  value={this.state.houseAddress.detailAddress}
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
                              value={this.state.companyName.value}
                              onInput={this.onInput.bind(this, 'companyName')}
                            />
                        </View>
                        {/* 单位地址--简单复用住宅地址 */}
                        <View className='info-input-house-address'>
                        <View className='my-info-input-house-address-title'>
                            <View className='my-info-input-house-address-title-name'>
                                <Text className='my-info-input-house-address-title-name-txt'>{this.state.companyAddress.pickerName}</Text>
                            </View>
                            <View className='my-info-input-house-address-title-img'>
                                { 
                                    this.state.companyAddress.finished
                                        ? <Image 
                                          src={successIcon} 
                                          className={
                                                process.env.TARO_ENV === 'h5' 
                                                ? 'my-info-input-house-address-title-img-icon'
                                                : 'my-info-input-house-address-title-img-icon-weapp'  
                                                }
                                        />
                                        : null
                                }
                            </View>
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
                                    <RnProvicePicker 
                                      onProviceChange={this.onConProviceChange.bind(this)} 
                                      address={this.state.companyAddress}
                                    ></RnProvicePicker>
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
                                  value={this.state.companyAddress.detailAddress}
                                />
                            </View>
                        </View>

                        {/* 单位电话 */}
                        <View className='info-input-company-phone'>
                            <View className='info-input-company-phone-name'>
                                <View className='my-info-input-company-phone-title'>
                                    <View className='my-info-input-company-phone-title-name'>
                                        <Text className='my-info-input-company-phone-title-name-txt'>{this.state.companyPhone.inputName}</Text>
                                    </View>
                                    <View className='my-info-input-company-phone-title-img'>
                                        { 
                                            this.state.companyPhone.finished 
                                                ? <Image 
                                                  src={successIcon} 
                                                  className={
                                                        process.env.TARO_ENV === 'h5' 
                                                        ? 'my-info-input-company-phone-title-img-icon'
                                                        : 'my-info-input-company-phone-title-img-icon-weapp'  
                                                        }
                                                />
                                                : null
                                        }
                                    </View>
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
                                  value={this.state.companyPhone.prefix}
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
                                  value={this.state.companyPhone.phone}
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
                                  value={this.state.companyPhone.suffix}
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
                                  value={this.state.income.value}
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
                              value={this.state.contactsName.value}
                              onInput={this.onInput.bind(this, 'contactsName')}
                            />
                        </View>
                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.contactsPhone.inputName} 
                              type='number' 
                              finished={this.state.contactsPhone.finished} 
                              value={this.state.contactsPhone.value}
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