import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Header from '../src/js/components/Header';

// it('componentWillReceiveProps', () => {
//     let wrapper = shallow(<Header role={''} />);
//     sinon.stub(Header.prototype, 'componentWillReceiveProps');
//     wrapper.setProps({
//         role: 'admin'
//     });
//     expect(Header.prototype.componentWillReceiveProps.calledOnce).toBeTruthy();
// });
//
//
describe('Snapshot', () => {
    //获取快照
    it('Header', () => {
        const renderedValue = renderer.create(<Header />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('验证header组件的event正确性', () => {
    //event事件
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Header />);
    });

    it('事件操作加', () => {
        wrapper.setState({numone: 8, numtwo: 2});
        wrapper.find('#add').simulate('click');
        expect(wrapper.state().numres).toBe(10);
    });

    it('事件操作减', () => {
        wrapper.setState({numone: 8, numtwo: 2});
        wrapper.find('#subtract').simulate('click');
        expect(wrapper.state().numres).toBe(6);
    });

    it('事件操作减和', () => {
        const mockEvent = {
            keyCode: 13, // enter 事件
            target: {
                value: 10
            }
        };
        wrapper
            .find('input')
            .at(0)
            .simulate('change', mockEvent); //simulate 触发事件不加on 并且 设置value 要与数据格式一致
        expect(wrapper.state().numone).toBe(10);
        wrapper.find('#add').simulate('click');
        expect(wrapper.state().numres).toBe(12);
    });
});

describe('验证header组件的正确性', () => {
    //静态UI的正确性
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header name={'hello'} />);
    });

    it('初始化验证', () => {
        expect(wrapper.contains(<h2>using from init</h2>)).toBe(true);
        expect(wrapper.state('numone')).toBe(2);
        expect(wrapper.state('numtwo')).toBe(2);
        expect(wrapper.find('button').length).toBe(2);
        expect(wrapper.find('#add').text()).toBe('Add');
        expect(wrapper.find('#add').type()).toBe('button');
        expect(wrapper.find('#subtract').html()).toEqual(`<button id="subtract"><span>Subtract</span></button>`); //不加事件
        expect(wrapper.find('span').length).toBe(2);
        expect(wrapper.name()).toEqual('div'); //组件名称
        expect(wrapper.find('#add').name()).toEqual('button');
        expect(wrapper.find('.HeaderBox').text()).toEqual('');
        expect(wrapper.find('#subtract').children().length).toBe(1);
        expect(
            wrapper
                .find('#add')
                .parent()
                .is('div')
        ).toBe(true);

        expect(
            wrapper
                .find('#subtract')
                .childAt(0)
                .type()
        ).toEqual('span');
        expect(wrapper.contains(<h2>using from init</h2>)).toEqual(true);
        expect(wrapper.contains(<h2 />)).toEqual(false); //包含
        expect(wrapper.containsAllMatchingElements([<h2>using from init</h2>, <div className="HeaderBox" />])).toEqual(true); //数组包含all
        expect(wrapper.containsAnyMatchingElements([<h2>using from init</h2>, <div>Goodbye</div>])).toEqual(true); //数组包含 any
        expect(wrapper.containsMatchingElement(<h2>using from init</h2>)).toEqual(true);
        expect(wrapper.containsMatchingElement(<button>Add</button>)).toEqual(true); //模糊匹配html元素属性 内容精确匹配
        // console.log(wrapper.debug());
        expect(wrapper.find('.libox').every('.libox')).toEqual(true);
        expect(wrapper.find('.libox').everyWhere(n => n.hasClass('libox'))).toEqual(true);
        expect(
            wrapper.find('.libox').everyWhere(n => {
                // console.log(n.debug());
                return n.type('li');
            })
        ).toEqual(true);
        expect(wrapper.exists('#add')).toEqual(true); //判断节点是否存在
        expect(wrapper.find('.libox').filter('.add').length).toBe(0);
        const complexFoo = wrapper.find('li').filterWhere(n => typeof n.type() === 'string');
        //条件过滤器;
        expect(complexFoo.length).toBe(3);
        const complexComponents = wrapper.find('ul').findWhere(n => n.type() !== 'string');
        // console.log(complexComponents.debug());
        expect(complexComponents.length).toBe(6);
        wrapper.find('li').forEach(node => {
            //循环执行判断
            expect(node.hasClass('libox')).toEqual(true);
        });
        // console.log(wrapper.find('.libox').get(1)); //get 返回子 at 返回自己包括子
        expect(
            wrapper
                .find('.libox')
                .at(1)
                .props().children
        ).toEqual('123');
        const texts = wrapper.find('.libox').map(node => node.text());
        // console.log(texts);
        expect(texts).toEqual(['12', '123', '12']); //获取所有值
        // console.log(wrapper.props().debug());
        // console.log(wrapper.prop('name'));
        // expect(wrapper.props().name).toEqual('hello'); mount
    });
});
