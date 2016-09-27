/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************************!*\
  !*** ./src/client/app/components/index.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Modal = exports.Input = exports.Panel = exports.Grid = exports.Button = exports.Jumbotron = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _QuizHeader = __webpack_require__(/*! ./QuizHeader.jsx */ 1);
	
	var _QuizHeader2 = _interopRequireDefault(_QuizHeader);
	
	var _QuestionList = __webpack_require__(/*! ./QuestionList.jsx */ 2);
	
	var _QuestionList2 = _interopRequireDefault(_QuestionList);
	
	var _Result = __webpack_require__(/*! ./Result.jsx */ 4);
	
	var _Result2 = _interopRequireDefault(_Result);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Jumbotron = exports.Jumbotron = ReactBootstrap.Jumbotron;
	var Button = exports.Button = ReactBootstrap.Button;
	var Grid = exports.Grid = ReactBootstrap.Grid;
	var Panel = exports.Panel = ReactBootstrap.Panel;
	var Input = exports.Input = ReactBootstrap.Input;
	var Modal = exports.Modal = ReactBootstrap.Modal;
	
	var QuizApp = function (_React$Component) {
	  _inherits(QuizApp, _React$Component);
	
	  function QuizApp(props) {
	    _classCallCheck(this, QuizApp);
	
	    var _this = _possibleConstructorReturn(this, (QuizApp.__proto__ || Object.getPrototypeOf(QuizApp)).call(this, props));
	
	    _this.state = { quiz: { questions: [] }, showResult: false, correct: 0 };
	    _this.completed = _this.completed.bind(_this);
	    return _this;
	  }
	
	  _createClass(QuizApp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var quizRef = new Firebase('https://firequiz.firebaseio.com/quizzes/' + this.props.i);
	      quizRef.on('value', function (snapshot) {
	        return _this2.setState({
	          quiz: snapshot.val()
	        });
	      });
	    }
	  }, {
	    key: 'completed',
	    value: function completed(values) {
	      var _this3 = this;
	
	      console.log('complete');
	      var correct = 0;
	      values.forEach(function (v, i) {
	        if (v == _this3.state.quiz.questions[i].answer) correct++;
	      });
	      console.log(correct);
	      this.setState({ correct: correct }, function () {
	        _this3.setState({ showResult: true });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var closeResult = function closeResult(e) {
	        return _this4.setState({ showResult: false });
	      };
	      var questions = this.state.quiz.questions;
	      var questionList = questions.length > 0 ? React.createElement(_QuestionList2.default, { data: questions, onComplete: this.completed }) : null;
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(_QuizHeader2.default, null),
	        questionList,
	        React.createElement(_Result2.default, { show: this.state.showResult, onHide: closeResult,
	          correct: this.state.correct, total: questions.length })
	      );
	    }
	  }]);
	
	  return QuizApp;
	}(React.Component);
	
	React.render(React.createElement(QuizApp, { i: '0' }), document.getElementById('app'));

/***/ },
/* 1 */
/*!**************************************************!*\
  !*** ./src/client/app/components/QuizHeader.jsx ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Jumbotron = exports.Jumbotron = ReactBootstrap.Jumbotron;
	var Button = exports.Button = ReactBootstrap.Button;
	var Grid = exports.Grid = ReactBootstrap.Grid;
	
	var QuizHeader = function (_React$Component) {
	  _inherits(QuizHeader, _React$Component);
	
	  function QuizHeader() {
	    _classCallCheck(this, QuizHeader);
	
	    return _possibleConstructorReturn(this, (QuizHeader.__proto__ || Object.getPrototypeOf(QuizHeader)).apply(this, arguments));
	  }
	
	  _createClass(QuizHeader, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        Jumbotron,
	        null,
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            "h1",
	            null,
	            "How Smart Are You?"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "A slightly interesting quiz consisting of seven questions that I scraped from some place I can't remember."
	          ),
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              Button,
	              { bsStyle: "primary", href: "https://github.com/prashcr/firequiz",
	                target: "_blank" },
	              "What's this?"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return QuizHeader;
	}(React.Component);
	
	module.exports = QuizHeader;

/***/ },
/* 2 */
/*!****************************************************!*\
  !*** ./src/client/app/components/QuestionList.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Question = __webpack_require__(/*! ./Question.jsx */ 3);
	
	var _Question2 = _interopRequireDefault(_Question);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Grid = ReactBootstrap.Grid;
	
	var QuestionList = function (_React$Component) {
	  _inherits(QuestionList, _React$Component);
	
	  function QuestionList(props) {
	    _classCallCheck(this, QuestionList);
	
	    var _this = _possibleConstructorReturn(this, (QuestionList.__proto__ || Object.getPrototypeOf(QuestionList)).call(this, props));
	
	    _this.state = { values: _this.props.data.map(function (q) {
	        return 'select';
	      }) };
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(QuestionList, [{
	    key: 'handleChange',
	    value: function handleChange(i) {
	      var _this2 = this;
	
	      return function (e) {
	        _this2.setState({
	          values: React.addons.update(_this2.state.values, _defineProperty({}, i, { $set: e.target.value }))
	        }, function () {
	          console.log(_this2.state.values);
	          if (_this2.state.values.every(function (v) {
	            return v != 'select';
	          })) {
	            _this2.props.onComplete(_this2.state.values);
	            _this2.setState({ values: _this2.props.data.map(function (q) {
	                return 'select';
	              }) });
	          }
	        });
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return React.createElement(
	        Grid,
	        null,
	        this.props.data.map(function (question, i) {
	          return React.createElement(_Question2.default, { key: i, data: question, value: _this3.state.values[i], ch: _this3.handleChange(i) });
	        })
	      );
	    }
	  }]);
	
	  return QuestionList;
	}(React.Component);
	
	module.exports = QuestionList;

/***/ },
/* 3 */
/*!************************************************!*\
  !*** ./src/client/app/components/Question.jsx ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Panel = ReactBootstrap.Panel;
	var Input = ReactBootstrap.Input;
	
	var Question = function (_React$Component) {
	  _inherits(Question, _React$Component);
	
	  function Question() {
	    _classCallCheck(this, Question);
	
	    return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).apply(this, arguments));
	  }
	
	  _createClass(Question, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        Panel,
	        { header: this.props.data.text },
	        React.createElement(
	          Input,
	          { type: "select", value: this.props.value, onChange: this.props.ch },
	          React.createElement(
	            "option",
	            { value: "select" },
	            "select"
	          ),
	          this.props.data.choices.map(function (choice, i) {
	            return React.createElement(
	              "option",
	              { key: i, value: i },
	              choice
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Question;
	}(React.Component);
	
	module.exports = Question;

/***/ },
/* 4 */
/*!**********************************************!*\
  !*** ./src/client/app/components/Result.jsx ***!
  \**********************************************/
/***/ function(module, exports) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Modal = ReactBootstrap.Modal;
	var Button = ReactBootstrap.Button;
	
	var Result = function (_React$Component) {
	  _inherits(Result, _React$Component);
	
	  function Result() {
	    _classCallCheck(this, Result);
	
	    return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
	  }
	
	  _createClass(Result, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        Modal,
	        _extends({}, this.props, { bsSize: "medium", "aria-labelledby": "contained-modal-title-md" }),
	        React.createElement(
	          Modal.Header,
	          { closeButton: true },
	          React.createElement(
	            Modal.Title,
	            { id: "contained-modal-title-md" },
	            "Your score"
	          )
	        ),
	        React.createElement(
	          Modal.Body,
	          null,
	          "You got ",
	          this.props.correct,
	          " correct out of ",
	          this.props.total,
	          "!"
	        ),
	        React.createElement(
	          Modal.Footer,
	          null,
	          React.createElement(
	            Button,
	            { onClick: this.props.onHide },
	            "Close"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Result;
	}(React.Component);
	
	module.exports = Result;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map