import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculations } from '../../core/ui/calculations';
import { Header } from '../../components/Header/Header';
import { CompareWithItem } from '../../components/ComparePanel/CompareWithItem';
import './comparePanel.css';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'
import * as compareActions from '../ComparePanel/actions'
import { bindActionCreators } from 'redux';

export class ComparePanel extends Component {
    constructor(props) {
        super(props);
        this.state = { domReady: false };
    }

    componentDidMount() {
        this.setState({ domReady: true });
    }

    showCurrentMode(mode, product, item) {
        const
            width = this.comparePanelBody.offsetWidth,
            height = this.comparePanelBody.offsetHeight;
        return (
            <CompareWithItem 
                key={item.id} 
                product={product} 
                item={item} 
                calculations={ calculations(width, height) } 
                bodySize = {{width, height}}
                measure = {this.props.measure}
            />)
    }

        measureHandleChange = (value) => {
        this.props.compareActions.changeMeasure(value)
        this.props.compareActions.localMeasure()

    }

    render() {
        return (
            <div className="compare-panel">
                <Header mode={this.props.currentMode} productName={this.props.product.name} currentItems={this.props.currentItems} />
                <div className="compare-panel__body" ref={(body) => this.comparePanelBody = body}>
                <ToggleSwitch measure = {this.props.measure} onChangeMeasure = {this.measureHandleChange}></ToggleSwitch>
                    {
                        this.state.domReady &&
                        this.showCurrentMode(this.props.currentMode, this.props.product, this.props.currentItems[0], this.props.measure)
                    }
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentMode: state.ControlPanel.currentMode,
        currentItems: state.ControlPanel.currentItems,
        product: state.ComparePanel.product,
        measure: state.ComparePanel.measure
    };
};

let mapDispatchToProps = (dispatch) => {
    return{
        compareActions: bindActionCreators(compareActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ComparePanel);