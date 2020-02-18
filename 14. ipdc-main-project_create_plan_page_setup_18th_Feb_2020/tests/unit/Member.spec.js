import { shallowMount } from '@vue/test-utils'
import Member from '../../src/views/ReportLandingInputs/ManpowerAndPersonalContacts/Member.vue'

describe('Member.vue', () => {
  it('Member component: created() functin testing', () => {
    expect(typeof Member.created).toBe('function')
    console.log('Member component created is a function');
  })
  
  it('Member component: onSubmit() functin testing', () => {
    const post = {
      member: {
        lastPeriod: this.lastPeriod,
        target: this.target,
        actual: this.actual,
        increased: this.increased,
        decreased: this.decreased,
        memberContact: this.memberContact,
        comment: this.comment
      }
    };
    expect(typeof Member.methods.onSubmit.post).toBe(post)
    console.log('Member component onSubmit is a function');
  })
})

