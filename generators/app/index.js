const Generator = require("yeoman-generator");
// const chalk = require("chalk");
// const yosay = require("yosay");

// 直接导出使用生成器
module.exports = class extends Generator {
  // 任一一个普通的方法 生成器都会自动执行
  //   foo() {
  //     this.log("我的第一个生成器");
  //   }
  //   paths() {
  //     console.log(this.destinationRoot()); //项目根目录
  //     console.log(this.destinationPath("index.js")); //基于项目根目录连接具体文件相对路径生成文件绝对路径
  //     console.log(this.sourceRoot()); //手脚架模板文件根目录（准确的说应该是当前生成器模板文件根目录）
  //     console.log(this.templatePath("index.js")); //基于生成器模板根目录连接具体模板文件相对路径生成模板目标文件绝对路径
  //   }
  // 构造方法
  //   constructor(args, opts) {
  //     super(args.opts);
  //   }
  // 询问 - 获取信息 , 先执行
  prompting() {
    const prompts = [
      {
        type: "input", // 需要用户输入
        name: "appname", // 输入后保存在appname中
        message: "请输入项目名称", // 提示信息
        default: this.appname, // 默认是appname
      },
      {
        type: "input", // 需要用户输入
        name: "author", // 输入后保存在author中
        message: "请输入您的姓名", // 提示信息
        default: this.author, // 默认是author
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  // 生成预定义结构, 后执行
  writing() {
    // this.log(this.props);
    // 先获取模版路径
    let srcPath = this.sourceRoot();
    let destPath = this.destinationRoot();
    // 模版数据从props中获取
    this.fs.copyTpl(srcPath, destPath, this.props);
  }

  // 安装依赖, 后执行 generator-v5
  install() {
    // 安装依赖
    this.env.options.nodePackageManager = "npm";
    // this.installDependencies({});
  }

  end() {
    this.log("项目创建success");
  }
};

// this.prompt([
//   {
//     type: "input", // 需要用户输入
//     name: "appname", // 输入后保存在appname中
//     message: "请输入项目名称", // 提示信息
//     default: this.appname, // 默认是appname
//   },
//   {
//     type: "input", // 需要用户输入
//     name: "author", // 输入后保存在author中
//     message: "请输入您的姓名", // 提示信息
//     default: this.author, // 默认是author
//   },
// ]).then((answers) => {
//   this.answers = answers;
// });
