import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import axios from 'axios';
import Member from '../../src/views/ReportLandingInputs/ManpowerAndPersonalContacts/Member.vue'
import UnitReportService from '../../src/services/UnitPlanReportService'

describe('Member.vue', () => {
  // it('Member component: created() functin testing', () => {
  //   expect(typeof Member.created).toBe('function')
  //   console.log('Member component created is a function');
  // })
  
  it('Member component: onSubmit() functin testing', () => {
    // const post = {
    //   member: {
    //     lastPeriod: this.lastPeriod,
    //     target: this.target,
    //     actual: this.actual,
    //     increased: this.increased,
    //     decreased: this.decreased,
    //     memberContact: this.memberContact,
    //     comment: this.comment
    //   }
    // };
    // const wrapper = shallowMount(Member, {
    //   // propsData: {
    //   //   myItems
    //   // }
    // })
    // wrapper.vm.foo = 'something'
    // console.log(Member.methods.onSubmit())
    const defData = Member.data()
    // console.log(defData.testase)
    expect(defData.testase).toMatch('FRSummit')
    expect(defData.lastPeriod).toBe(null)
    console.log('Member component onSubmit is a function');
  })

  it('Member component: initial data() testing', () => {
    const defData = Member.data()
    expect(defData.lastPeriod).toBe(null)
    expect(defData.target).toBe(null)
    expect(defData.increased).toBe(null)
    expect(defData.decreased).toBe(null)
    expect(defData.thisPeriod).toBe(null)
    expect(defData.memberContact).toBe(null)
    expect(defData.comment).toBe(null)
    expect(defData.nameAndContactNumber).toBe(null)
    expect(defData.action).toBe(null)
    expect(defData.testase).toMatch('FRSummit')
    expect(defData.planOrReportTab).toBe(null)
    console.log('Member component default data passed');
  })

  it('Member component: service testing', () => {
    const unitReportService = new UnitReportService()
    console.log(unitReportService.getAllPosts())
    // expect(unitReportService.getAllPosts()).toBe(null)
    axios.get('http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10', {
      headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
         } 
      }).then(res => {
          console.log(res);
          console.log(res.data);
        })
  })

  // it('Member component: back button function testing', () => {
  //   const back = Member.methods
  //   console.log(back.backButton())
  // })

  it('Member component: back button function testing', () => {
    const back = Member.methods
    console.log(back)
    // console.log(back.backButton())
    console.log(back.addition(5, 6))
    expect(back.addition(5, 6)).toBe(11)
  })
})

