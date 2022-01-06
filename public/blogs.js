let BlogsData = {
    "react-spring": [
        {type: "header", text: "Introduction to Animations in React using React Spring"},
        {type: "image", url: "/blogs/react-spring/head.jpg"},
        {type: "text", text: "In this article we’ll be exploring one of the best React Frameworks for animations, React Spring, and how you can use React Spring to create simple to complex animations that look beautiful."},
        {type: "section", content: [
          {type: "head", text: "Prerequisites"},
          {type: "text", text: "While React Spring provides both hook-based and component-based APIs, for the article we’ll exclusively look at the hook-based API for all of the animations."},
          {type: "text", text: "For adding the package to your React project,\n For NPM"},
          {type: "code", text: "npm install react-spring d3-ease"},
          {type: "text", text: "For yarn"},
          {type: "code", text: "yarn add react-spring d3-ease"},
          {type: "text", text: "Here we’re also adding the package d3-ease for using different easing functions to our animations without creating our own, but also having smoother animations and having endless easing functions at our disposal."},]},
        {type: "section", content: [
          {type: "head", text: "React Spring Hooks"},
          {type: "code-text", textback: "", code: "useSpring", textfront: " - A single spring, moves from state A to B."},
          {type: "code-text", textback: "", code: "useSprings", textfront: " - Multiple springs, mainly for list of elements/components, each moving from state A to B."},
          {type: "code-text", textback: "", code: "usesTransition", textfront: " - Multiple springs, one spring follows or ‘trails’ behind the other."},
          {type: "code-text", textback: "", code: "useTrail", textfront: " - For mounting/unmounting animations(for list of components)."},
          {type: "code-text", textback: "", code: "useChain", textfront: " - To chain or combine multiple animations together."},
          {type: "text", text: "For the article, we’ll look at the most basic hook useSpring."},]}, 
        {type: "section", content: [
          {type: "head", text: "Basic Reveal Animation"},
          {type: "code-text", textback: "To use the ", code: "useSpring", textfront: " hook in out project, we import the hook and animated from the react-spring library. We also import the d3-ease library, though it can be ignored if you want to use other easing functions."},
          {type: "code", text: "import \{ useSpring, animated \} from \‘react-spring\’\nimport \* as easings from \‘d3-ease\’"},
          {type: "text", text: "We import animated, as native elements need to know how to handle the animated props you pass to it. Animate does this by extended these native elements so it can be animated out React (for performance reasons)."},
          {type: "text", text: "Next we define our spring"},
          {type: "code", text: "const Animate = useSpring({\n\tfrom: {\n\t\topacity: 0\n\t},\n\tto: {\n\t\topacity: 1\n\t}, \n\tconfig: {\n\t\tduration: 300, \n\t\teasing: easings.easeCubic\n\t}\n})"},
          {type: "code-text", textback: "This could also be declared as a function like any other function with any number of parameters and the ", code: "useSpring", textfront: " hook as the return field."},
          {type: "code", text: "const Animate = (visible) => useSpring({\n\tfrom: {\n\t\topacity: 0\n\t},\n\tto: {\n\t\topacity: visible ? 1 : 0\n\t}, \n\tconfig: {\n\t\tduration: 300, \n\t\teasing: easings.easeCubic\n\t}\n})"},
          {type: "code-sandbox", url: "https://codesandbox.io/embed/wild-flower-xi3f9?fontsize=14&hidenavigation=1&theme=dark&view=preview"}
        ]}
    ]
}

export default BlogsData