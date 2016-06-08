import React from 'react'
import { Card } from 'antd';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class myCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('../../data.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.listData}) })
            .catch((e) => { console.log(e.message) })
    }

    componentDidMount() {
        this.fetchFn()
    }

    render() {
        return (
            <Card title="资源导航" style={{ width: "800px", margin: "0 auto" }} className="animated zoomIn">
                {
                    this.state.lists.map((e) => {
                        return (
                            <p className="doclist"><a href={ e.url } target="_blank">{ e.title }</a></p>
                        )
                    })
                }
            </Card>
        )
    }
}

