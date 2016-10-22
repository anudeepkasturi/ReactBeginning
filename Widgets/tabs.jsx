import React from 'react';

class Header extends React.Component {
  render() {
    let selected = this.props.selectedTab;
    let headers = this.props.tabs.map( (tab, index) => {
      let title = tab.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <span
          key={index}
          className={klass}
          onClick = {this.props.getTab.bind(null, index)} >
          {title}
        </span>
      );
    });

    return (
      <div className = 'tab-header'>
        {headers}
      </div>
    );
  }
}

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedTab: 0 };
    this.getTab = this.getTab.bind(this);
  }

  getTab(idx) {
    this.setState({selectedTab: idx});
  }

  render() {
    return (
      <div className = "tabBody">
        <h1>Tabs</h1>
          <Header
            selectedTab={this.state.selectedTab}
            getTab={this.getTab}
            tabs={this.props.tabs}>
          </Header>
          <p>
            {this.props.tabs[this.state.selectedTab].content}
          </p>
      </div>
    );
  }
}



export default Tab;
