window.onload = () => {
  new Vue({
    data: {
      blockOne: [
        {
          key: 'liang_ma_cha',
          label: '任意两码差',
          list: [
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false },
            { value: 6, label: '6', select: false },
            { value: 7, label: '7', select: false },
            { value: 8, label: '8', select: false },
            { value: 9, label: '9', select: false },
            { value: 10, label: '10', select: false }
          ]
        },
        {
          key: 'max_continuation_distance',
          label: '最大临码跨距',
          list: [
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false },
            { value: 6, label: '6', select: false },
            { value: 7, label: '7', select: false }
          ]
        },
        {
          key: 'distance',
          label: '跨 &nbsp;&nbsp;&nbsp;&nbsp; 度',
          list: [
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false },
            { value: 6, label: '6', select: false },
            { value: 7, label: '7', select: false },
            { value: 8, label: '8', select: false },
            { value: 9, label: '9', select: false },
            { value: 10, label: '10', select: false }
          ]
        },
        {
          key: 'balance',
          label: '平衡指数',
          list: [
            { value: '小', label: '小', select: false },
            { value: '等', label: '等', select: false },
            { value: '大', label: '大', select: false }
          ],
          timeList:[
            { value: '1', label: '1', select: false, disabled: true }
          ]
        },
        {
          key: 'first_pc',
          label: '龙头',
          list: [
            { value: '0', label: '质', select: false },
            { value: '1', label: '合', select: false }
          ],
          timeList:[
            { value: '0', label: '0', select: false, disabled: true },
            { value: '1', label: '1', select: false, disabled: true }
          ]
        },
        {
          key: 'first_eo',
          label: '龙头',
          list: [
            { value: '0', label: '单', select: false },
            { value: '1', label: '双', select: false }
          ],
          timeList:[
            { value: '0', label: '0', select: false, disabled: true },
            { value: '1', label: '1', select: false, disabled: true }
          ]
        },
      ],
      success_counts: [], // 注数
      first_pc: [],  // 龙头 质/合
      first_pc_times: [],
      first_eo: [], // 龙头 单/双
      first_eo_times: [],
      blockTwo: [
        {
          key: 'continuation_counts',
          label: '连号个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
        {
          key: 'smaller_counts',
          label: '小数个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
        {
          key: 'bigger_counts',
          label: '大数个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
        {
          key: 'even_counts',
          label: '奇数个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
        {
          key: 'odd_counts',
          label: '偶数个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
        {
          key: 'prime_counts',
          label: '质数个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
        {
          key: 'composite_counts',
          label: '合数个数',
          list: [
            { value: 0, label: '0', select: false },
            { value: 1, label: '1', select: false },
            { value: 2, label: '2', select: false },
            { value: 3, label: '3', select: false },
            { value: 4, label: '4', select: false },
            { value: 5, label: '5', select: false }
          ]
        },
      ],
      sum: 0,
      // balance_times_list: { value: 1, label: '1', select: false },
      balance: [], // 平衡指数
      balance_times: [], // 平衡指数-出现
      liang_ma_cha: [], // 任意两码差
      max_continuation_distance: [], // 最大临码跨距
      distance: [], // 跨度

      continuation_counts: [], // 连号个数
      smaller_counts: [], // 小数个数
      bigger_counts: [], // 大数个数
      even_counts: [], // 奇数个数
      odd_counts: [], // 偶数个数
      prime_counts: [], // 质数个数
      composite_counts: [], // 合数个数
      timesDisabled: 0,
      times: [],
      timesList: [
        { value: 1, label: '1', select: false, disabled: true },
        { value: 2, label: '2', select: false, disabled: true },
        { value: 3, label: '3', select: false, disabled: true },
        { value: 4, label: '4', select: false, disabled: true },
        { value: 5, label: '5', select: false, disabled: true },
        { value: 6, label: '6', select: false, disabled: true },
        { value: 7, label: '7', select: false, disabled: true }
      ],
      blockThree: [
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
        {
          list: [
            { value: 1, label: '01', select: false },
            { value: 2, label: '02', select: false },
            { value: 3, label: '03', select: false },
            { value: 4, label: '04', select: false },
            { value: 5, label: '05', select: false },
            { value: 6, label: '06', select: false },
            { value: 7, label: '07', select: false },
            { value: 8, label: '08', select: false },
            { value: 9, label: '09', select: false },
            { value: 10, label: '10', select: false },
            { value: 11, label: '11', select: false }
          ],
          disabledNum: 0,
          timeList: [
            { value: 0, label: '0', select: false, disabled: true },
            { value: 1, label: '1', select: false, disabled: true },
            { value: 2, label: '2', select: false, disabled: true },
            { value: 3, label: '3', select: false, disabled: true },
            { value: 4, label: '4', select: false, disabled: true },
            { value: 5, label: '5', select: false, disabled: true },
          ]
        },
      ],
      lastList: {
        list: [
          { value: 1, label: '01', select: false },
          { value: 2, label: '02', select: false },
          { value: 3, label: '03', select: false },
          { value: 4, label: '04', select: false },
          { value: 5, label: '05', select: false },
          { value: 6, label: '06', select: false },
          { value: 7, label: '07', select: false },
          { value: 8, label: '08', select: false },
          { value: 9, label: '09', select: false },
          { value: 10, label: '10', select: false },
          { value: 11, label: '11', select: false }
        ],
        disabledNum: 0,
        timeList: [
          { value: 0, label: '0', select: false, disabled: true },
          { value: 1, label: '1', select: false, disabled: true },
          { value: 2, label: '2', select: false, disabled: true },
          { value: 3, label: '3', select: false, disabled: true },
          { value: 4, label: '4', select: false, disabled: true },
          { value: 5, label: '5', select: false, disabled: true },
        ]
      },
      filter_where: [
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []]
      ],
      // total_filter: [
      //   [], []
      // ],
      totalList: [
        { value: -1, label: '负', select: false },
        { value: 0, label: '和', select: false },
        { value: 1, label: '正', select: false }
      ],
      total: [],
      resultText: '',
      dataTotal: 0,
      blockFour: [
        {
          key: 'success_counts',
          label: '近百注号码',
          list: [
            { value: 10, label: '10注', select: false },
            { value: 20, label: '20注', select: false },
            { value: 30, label: '30注', select: false },
            { value: 40, label: '40注', select: false },
            { value: 50, label: '50注', select: false },
            { value: 60, label: '60注', select: false },
            { value: 70, label: '70注', select: false },
            { value: 80, label: '80注', select: false },
            { value: 90, label: '90注', select: false },
            { value: 100, label: '100注', select: false }
          ]
        }
      ],
      blockFourText: ''
    },
    methods: {
      // 和值选择
      sumSelect(num){
        num.select = !num.select
        this.total = []
        if(num.select){
          for(let i = 0; i < this.totalList.length; i++){
            if(!(num === this.totalList[i])){
              this.totalList[i].select = false
            }
          }
          this.total.push(num.value)
        }
      },
      // 单选
      radioSelect(num,item,val, type = '', timesList = []){
        num.select = !num.select
        if(num.select){
          this[val].length = 0
          this[val].push(num.value)
          for(let i = 0; i < item.length; i++){
            if(!(num === item[i])){
              item[i].select = false
            }
          }
          for(let j = 0; j < timesList.length; j++){
            timesList[j].disabled = false
          }
          if(type){
            axios.post('http://lottery.papiyas.cn/api/generator', {
              success_counts: this.success_counts
            }).then(res => {
              this.blockFourText = ''
              setTimeout(() => {
                this.blockFourText = res.data.join('\n')
              }, 100)
            })
          }
        }else if(timesList.length){
          for(let j = 0; j < timesList.length; j++){
            timesList[j].disabled = true
            timesList[j].select = false
            this[val].length = 0
          }
          if(type){
            this.blockFourText = ''
          }
        }
      },
      selectItem(num, item, type = '', computed = false) {
        num.select = !num.select
        // this[item.key].
        if (num.select) {
          this[type || item.key].push(num.value)
          if(item.key === 'balance') {
            item.timeList[0].disabled = false
            item.timeList[0].select = false
          }
        } else {
          const index = this[type || item.key].indexOf(num.value)
          this[type || item.key].splice(index, 1)
          console.log(item.key)
          if(item.key === 'balance') {
            item.timeList[0].select = false
            item.timeList[0].disabled = true
            this.balance_times = []
          }
        }
        if (computed) {
          // 出现选择
          const list = [this.continuation_counts.length, this.smaller_counts.length, this.bigger_counts.length, this.even_counts.length, this.odd_counts.length, this.prime_counts.length, this.composite_counts.length]
          let index = 0
          for (let i = 0; i < list.length; i++) {
            if (list[i] > 0) {
              index++
            }
          }
          this.timesDisabled = index
          for (let i = 0; i < this.timesList.length; i++) {
            if (i < index) {
              this.timesList[i].disabled = false
            } else {
              this.timesList[i].disabled = true
              this.timesList[i].select = false
              // if (this.times.includes(this.timesList[i].value)) this.times.splice(i, 1)
            }
          }
        }
      },
      danListSelect(num, index, key, type='') {
        num.select = !num.select
        // if(index === '') {
        //   if (num.select) {
        //     this.total_filter[key].push(num.value)
        //   } else {
        //     const ind = this.total_filter[key].indexOf(num.value)
        //     this.total_filter[key].splice(ind, 1)
        //   }
        //   if(key === 0) {
        //     const limit = this.total_filter[0].length > 5 ? 5 : this.total_filter[0].length
        //     const len = this.lastList.timeList.length
        //     for(let i = 0; i < len; i ++) {
        //       if (i <= limit) {
        //         this.lastList.timeList[i].disabled = false
        //       } else {
        //         this.lastList.timeList[i].disabled = true
        //         this.lastList.timeList[i].select = false
        //         if (this.total_filter[1].includes(this.lastList.timeList[i].value)) this.total_filter[1].splice(i, 1)
        //       }
        //     }
        //     if(limit === 0) {
        //       this.lastList.timeList[0].select = false
        //       this.lastList.timeList[0].disabled = true
        //     }
        //   }
        // } else {
          if (num.select) {
            this.filter_where[index][key].push(num.value)
          } else {
            const ind = this.filter_where[index][key].indexOf(num.value)
            this.filter_where[index][key].splice(ind, 1)
          }
          if(key === 0) {
            const limit = this.filter_where[index][0].length > 5 ? 5 : this.filter_where[index][0].length
            const len = this.blockThree[index].timeList.length
            for(let i = 0; i < len; i ++) {
              if (i <= limit) {
                this.blockThree[index].timeList[i].disabled = false
              } else {
                this.blockThree[index].timeList[i].disabled = true
                this.blockThree[index].timeList[i].select = false
                if (this.filter_where[index][1].includes(this.blockThree[index].timeList[i].value)) this.filter_where[index][1].splice(i, 1)
              }
            }
            if(limit === 0) {
              this.blockThree[index].timeList[0].select = false
              this.blockThree[index].timeList[0].disabled = true
            }
          }
          let dan1Sum = 0
          for(let i = 0; i < this.blockThree[0].list.length; i++){
            if(this.blockThree[0].list[i].select){
              dan1Sum +=  this.blockThree[0].list[i].value
            }
          }
          this.sum = dan1Sum 
        // }
      },
      // 清除单行
      clearItem(item) {
        if (item.key) {
          this[item.key] = []
          for (let i = 0, len = item.list.length; i < len; i++) {
            item.list[i].select = false
          }
          if(item.timeList){
            this[item.key + '_times'] = []
            for (let i = 0, len = item.timeList.length; i < len; i++) {
              item.timeList[i].disabled = true
              item.timeList[i].select = false
            }
          }
        } else {
          this[item] = []
          if(item === 'total') {
            for (let i = 0, len = this.totalList.length; i < len; i++) {
              this.totalList[i].select = false
            }
          } else {
            for (let i = 0, len = this.timesList.length; i < len; i++) {
              this.timesList[i].select = false
            }
          }
        }
      },
      selectBalance(item){
        item[0].select = !item[0].select
        if(item[0].select){
          this.balance_times = [1]
        }else{
          this.balance_times = []
        }
      },
      danClear(index, type='') {
        if(type) {
          // this.total_filter = [[], []]
          for (let i = 0, len = this.lastList.list.length; i < len; i++) {
            this.lastList.list[i].select = false
          }
          for (let i = 0, len = this.lastList.timeList.length; i < len; i++) {
            this.lastList.timeList[i].select = false
            this.lastList.timeList[i].disabled = true
          }
        } else {
          this.filter_where[index] = [[], []]
          for (let i = 0, len = this.blockThree[index].list.length; i < len; i++) {
            this.blockThree[index].list[i].select = false
          }
          for (let i = 0, len = this.blockFour[index].list.length; i < len; i++) {
            this.blockFour[index].list[i].select = false
            this.success_counts = []
          }
          for (let i = 0, len = this.blockThree[index].timeList.length; i < len; i++) {
            this.blockThree[index].timeList[i].select = false
            this.blockThree[index].timeList[i].disabled = true
          }
        }
      },
      // 全部清除
      clearAll() {
        this.resultText = ''
        this.dataTotal = 0
      },
      // 生成
      createLottery() {
        const list = [],total_filter = []
        for(let i = 0, len = this.filter_where.length; i < len; i++) {
          if(this.filter_where[i][0].length) {
            list.push(this.filter_where[i])
          }
        }
        for(let i = 0, len = this.blockThree[0].list.length; i < len; i++) {
          if(this.blockThree[0].list[i].select) {
            total_filter.push(this.blockThree[0].list[i].value)
          }
        }
        var twoSum = 0
        for(let i = 0; i < this.blockTwo.length; i++){
          for(let j = 0; j < this.blockTwo[i].list.length; j++){
            if(this.blockTwo[i].list[j].select){
              twoSum++
            }
          }
        }
        let times = []
        for(let i = 0; i < this.times.length; i++){
          if(this.times[i] <= twoSum){
            times.push(this.times[i])
          }
        }
        this.times = times
        axios.post('http://lottery.papiyas.cn/api/generator', {
          liang_ma_cha: this.liang_ma_cha,
          max_continuation_distance: this.max_continuation_distance,
          distance: this.distance,
          continuation_counts: this.continuation_counts,
          smaller_counts: this.smaller_counts,
          bigger_counts: this.bigger_counts,
          even_counts: this.even_counts,
          odd_counts: this.odd_counts,
          prime_counts: this.prime_counts,
          composite_counts: this.composite_counts,
          times: times,
          balance: this.balance,
          filter_where: list,
          total: this.total,
          total_filter: total_filter,
          balance_times: this.balance_times,
          first_pc: this.first_pc,
          first_pc_times: this.first_pc_times,
          first_eo: this.first_eo,
          first_eo_times: this.first_eo_times

        }).then(res => {
          console.log(res)
          this.resultText = ''
          setTimeout(() => {
            this.dataTotal = res.data.length
            this.resultText = res.data.join('\n')
          }, 100)
        })
      },
      // 复制
      clipboardContent() {
        var clipboard = new ClipboardJS('#copy')

        clipboard.on('success', function(e) {

            e.clearSelection()
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
        if(this.resultText){
          this.$message({
            message: '复制成功！',
            type: 'success'
          });
        }
      },
      // 退出
      layout() {
        console.log('layout')
      }
    }
  }).$mount('#app')
}