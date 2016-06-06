import React from 'react'
import { Form, Input, Select, Checkbox, Radio, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

class myForm extends React.Component {
    handleSelectChange = (value) => {
        console.log(`selected ${value}`)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('收到表单值：', this.props.form.getFieldsValue())
    }

    render() {
        const { getFieldProps } = this.props.form

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    id="control-input"
                    label="输入框"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 6 }}>
                    <Input id="control-input" placeholder="Please enter..."
                    {...getFieldProps('userName')} />
                </FormItem>

                <FormItem
                    id="control-textarea"
                    label="文本域"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 6 }}>
                    <Input type="textarea" id="control-textarea" rows="3" 
                    {...getFieldProps('content')} />
                </FormItem>

                <FormItem
                    id="select"
                    label="Select 选择器"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 6 }}>
                    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                        {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="Checkbox 多选框"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 6 }}
                >
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem1')}>选项一</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem2')}>选项二</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem3')}>选项三</Checkbox>
                </FormItem>

                <FormItem
                    label="Radio 单选框"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 6 }} >
                    <RadioGroup defaultValue="b" {...getFieldProps('radioItem')}>
                        <Radio value="a">A</Radio>
                        <Radio value="b">B</Radio>
                        <Radio value="c">C</Radio>
                        <Radio value="d">D</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        )
    }
}

myForm = Form.create()(myForm)

export default myForm