//查询条件布局
Ext.define('SearchPanelCls_r1', {
  extend: 'Ext.form.Panel',
  xtype: 'SearchPanel_r1',
  layout: {
    type: 'hbox',
    pack: 'start',
    align: 'stretch'
  },

  //height: 30,
  width: '100%',
  bodyPadding: 0,
  border: false,
  frame: false,
  items:
    [
      //{
      //  labelWidth: 60,
      //  width: 240,
      //  margin: '0 2 0 0',
      //  xtype: 'textfield',
      //  //editable: false,
      //  fieldLabel: '身份证号',
      //  labelAlign: 'right',
      //  allowBlank: false,
      //  name: 'TerminalID'
      //  //id: 'txtFind_SheBeiMingcheng',
      //  //emptyText: ''
      //},
      {
        labelWidth: 70,
        width: 220,
        margin: '0 2 0 0',
        xtype: 'datefield',
        //editable: false,
        fieldLabel: '开始日期',
        labelAlign: 'right',
        name: 'StartDate',
        //value: new Date(),
        format: "Y-m-d",
        submitFormat: "Y-m-d",
        allowBlank: false
        //id: 'txtFind_SheBeiMingcheng',
        //emptyText: ''
      },
      {
        labelWidth: 70,
        width: 220,
        margin: '0 20 0 0',           //上右下左！！！
        xtype: 'datefield',
        //editable: false,
        fieldLabel: '结束日期',
        labelAlign: 'right',
        name: 'EndDate',
        //value: new Date(),
        format: "Y-m-d",
        submitFormat: "Y-m-d",
        allowBlank: false
        //id: 'txtFind_SheBeiMingcheng',
        //emptyText: ''
      },
      {
        xtype: 'numberfield',
        fieldLabel: "182报表获取天数",
        name: 'MySQL182QueryDays',
        //anchor: '100%',
        value: 3,
        width: 180,
        labelWidth: 105,
        decimals: 0,
        minValue: 1,
        maxValue: 15,
        allowBlank: false
      }
    ]
});

Ext.define('SearchPanelCls', {
  extend: 'Ext.panel.Panel',
  xtype: 'SearchPanel',
  //title: '按条件搜索',
  // defaultType: 'textfield',
  collapsible: false,                              //可折叠
  //height: 100,
  bodyPadding: 8,
  //padding: '10 55 10 20',
  border: true,
  layout: {
    type: 'vbox',
    pack: 'start',
    align: 'stretch'
  },
  margin: '0 0 0 0',
  //title: '按条件搜索',
  //defaultType: 'textfield',
  items: [
    {
      xtype: 'SearchPanel_r1',
      id: 'SearchConditionForm_id'
    },
    {
      xtype: 'SearchButtonPanel_r2'
    }
  ]
  //,
  //listeners:
  //{
  //  collapse: function (p, eOpts)
  //  {
  //    FixHeight();
  //  },
  //  expand: function (p, eOpts)
  //  {
  //    FixHeight();
  //  }
  //},
});

Ext.define('SearchButtonPanelCls_r2', {
  extend: 'Ext.panel.Panel',
  xtype: 'SearchButtonPanel_r2',
  layout: {
    type: 'hbox',
    pack: 'start',
    align: 'stretch'
  },
  bodyPadding: 0,
  padding: '10 0 0 0',
  border: false,
  frame: false,
  items:
    [
      {
        xtype: 'button',
        width: 80,
        margin: '0 0 0 0',
        text: '导 出',
        iconCls: 'searchIco',
        width: 80,
        height: 38,
        handler: function ()
        {
          var record = {
            StartDate: '2022-6-1',
            EndDate: '2022-6-30',
          };
          //console.log(record);
          var conditionsJsonStr = Ext.encode(record);
          //console.log(conditionsJsonStr);
          var domain = window.location.host;
          //var url = Ext.String.format("http://{0}{1}ExtHome/DownloadXLSX/T1?condition={2}", domain, AppRoot,conditionsJsonStr);
          var url = Ext.String.format("http://{0}{1}{2}?condition={3}", domain, AppRoot, 'ExtHome/DownloadXLSX/Edu', conditionsJsonStr);
          //Ext.Msg.alert("Ready", url);
          window.open(url);
        }
      }
    ]
});

Ext.define('MainPanelCls', {
  extend: 'Ext.panel.Panel',
  xtype: 'MainPage',
  bodyStyle: {
    background: 'Lavender',
    'border-color': 'red',
    'border-width': '1px'
  },
  //height: 400,
  //layout:'fit',
  layout: {
    type: 'vbox',
    pack: 'start',
    align: 'stretch'
  },
  bodyPadding: 0,
  padding: 10,

  items: [
    {
      xtype: 'SearchPanel',
      id: 'SearchPanel_ID'
      //flex: 1
    }
  ],
  listeners:
  {
    resize: function (thisP, width, height, oldWidth, oldHeight, eOpts)
    {

    }
  }
});

var mMainPanel, WidthOffset = 20, HeightOffset = 1;
Ext.onReady(function ()
{
  mMainPanel = Ext.create('MainPanelCls',
    {
      renderTo: Ext.getBody(),
      //height: 300,
      width: window.innerWidth - WidthOffset
    });

  //var form1 = Ext.getCmp('SearchConditionForm_id');
  //var thisForm = form1.getForm();
  //thisForm.setValues(InitCon);
});

Ext.on('resize', function (width, height)
{
  mMainPanel.setWidth(window.innerWidth - WidthOffset);
  //mMainPanel.setHeight(window.innerHeight - HeightOffset);
  //FixHeight()
});
