import{_ as e,c as n,o as r,d as t}from"./app.a97b467a.js";const m=`{"title":"\u7B2C\u4E8C\u671F AARRD\u6253\u5361\u8BA1\u5212","description":"","frontmatter":{},"headers":[{"level":2,"title":"Algorithm\uFF1A","slug":"algorithm\uFF1A"},{"level":2,"title":"Review\uFF1AHow to write performant React code: rules, patterns, do's and don'ts","slug":"review\uFF1Ahow-to-write-performant-react-code-rules-patterns-do-s-and-don-ts"},{"level":3,"title":"Review\uFF1AUnderstanding Referential Equality in React","slug":"review\uFF1Aunderstanding-referential-equality-in-react"},{"level":2,"title":"Tip\uFF1A\u5728IDE\u5FEB\u901F\u9884\u89C8UI\u7EC4\u4EF6","slug":"tip\uFF1A\u5728ide\u5FEB\u901F\u9884\u89C8ui\u7EC4\u4EF6"}],"relativePath":"MoreAWeek/week1.md"}`,o={},a=t(`<h1 id="\u7B2C\u4E8C\u671F-aarrd\u6253\u5361\u8BA1\u5212" tabindex="-1">\u7B2C\u4E8C\u671F AARRD\u6253\u5361\u8BA1\u5212 <a class="header-anchor" href="#\u7B2C\u4E8C\u671F-aarrd\u6253\u5361\u8BA1\u5212" aria-hidden="true">#</a></h1><h2 id="algorithm\uFF1A" tabindex="-1">Algorithm\uFF1A <a class="header-anchor" href="#algorithm\uFF1A" aria-hidden="true">#</a></h2><h4 id="_133-\u514B\u9686\u56FE" tabindex="-1"><a href="https://leetcode.cn/problems/clone-graph/" target="_blank" rel="noopener noreferrer">133. \u514B\u9686\u56FE</a> <a class="header-anchor" href="#_133-\u514B\u9686\u56FE" aria-hidden="true">#</a></h4><p>\u7ED9\u4F60\u65E0\u5411 \u8FDE\u901A \u56FE\u4E2D\u4E00\u4E2A\u8282\u70B9\u7684\u5F15\u7528\uFF0C\u8BF7\u4F60\u8FD4\u56DE\u8BE5\u56FE\u7684 \u6DF1\u62F7\u8D1D\uFF08\u514B\u9686\uFF09\u3002</p><p>\u56FE\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u5B83\u7684\u503C val\uFF08int\uFF09 \u548C\u5176\u90BB\u5C45\u7684\u5217\u8868\uFF08list[Node]\uFF09\u3002</p><div class="language-"><pre><code>class Node {
    public int val;
    public List&lt;Node&gt; neighbors;
}
</code></pre></div><p>\u9996\u5148\u660E\u786E\u6DF1\u62F7\u8D1D\u4E3A\u4E86\u6DF1\u62F7\u8D1D\u51FA\u6574\u5F20\u56FE\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u6574\u5F20\u56FE\u7684\u7ED3\u6784\u4EE5\u53CA\u5BF9\u5E94\u8282\u70B9\u7684\u503C\u3002</p><p>\u601D\u8DEF\uFF1A</p><ol><li><p>\u56E0\u4E3A\u662F\u65E0\u5411\u56FE\uFF0C\u6240\u4EE5\u4F1A\u9677\u5165\u6B7B\u5FAA\u73AF\uFF0C\u6BD4\u5982A -&gt; B B -&gt; A\uFF0C\u56E0\u6B64\u7528\u54C8\u5E0C\u8868\u8FDB\u884C\u5B58\u50A8\u3002</p></li><li><p>\u54C8\u5E0C\u8868\u5B58\u50A8\u7684\u662F\u5F53\u524D\u7684\u503C\uFF0C\u8BB0\u5F55\u662F\u5426\u88AB\u8BBF\u95EE\u8FC7\uFF0C\u9632\u6B62\u9677\u5165\u6B7B\u5FAA\u73AF\uFF0C\u503C\u5219\u662F\u5F53\u524D\u7684\u8282\u70B9\u3002</p></li><li><p>\u56E0\u4E3A\u662F\u56FE\uFF0C\u53EF\u4EE5\u7528\u6DF1\u5EA6\u641C\u7D22\u8FDB\u884C\u641C\u7D22\u904D\u5386\u3002</p></li><li><p>\u6CE8\u610F\u662F\u6DF1\u62F7\u8D1D\uFF0C\u9700\u8981clone\u4E00\u4E2A\u65B0\u8282\u70B9</p><div class="language-"><pre><code>/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    let map = new Map();
    const dfs = (node: Node | null) =&gt; {
        if(node == null) {
            return;
        }
        if(map.has(node.val)) {
            return map.get(node.val);
        }
        // \u8FDB\u884C\u6DF1\u62F7\u8D1D
        let clone = new Node(node.val, []);
        // \u5C06\u590D\u5236\u8282\u70B9\u8FDB\u884C\u5B58\u50A8
        map.set(node.val, clone);
        for (let i = 0; i &lt; node.neighbors.length; i++) {
            clone.neighbors.push(dfs(node.neighbors[i]));
        }
        return clone;
    }
    return dfs(node);

};
</code></pre></div></li></ol><h4 id="_17-\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408" tabindex="-1"><a href="https://leetcode.cn/problems/letter-combinations-of-a-phone-number/" target="_blank" rel="noopener noreferrer">17. \u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408</a> <a class="header-anchor" href="#_17-\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408" aria-hidden="true">#</a></h4><p>\u7ED9\u5B9A\u4E00\u4E2A\u4EC5\u5305\u542B\u6570\u5B57 <code>2-9</code> \u7684\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u6240\u6709\u5B83\u80FD\u8868\u793A\u7684\u5B57\u6BCD\u7EC4\u5408\u3002\u7B54\u6848\u53EF\u4EE5\u6309 <strong>\u4EFB\u610F\u987A\u5E8F</strong> \u8FD4\u56DE\u3002</p><p>\u601D\u8DEF\uFF1A</p><ol><li><p>\u968F\u673A\u7EC4\u5408\u53EF\u4EE5\u7528\u56DE\u6EAF\u8FDB\u884C\u89E3\u51B3\u3002</p></li><li><p>\u56DE\u6EAF\u8FC7\u7A0B\u4E2D\u7EF4\u62A4\u4E00\u4E2A\u5B57\u7B26\u4E32\u548C\u5F53\u524D\u904D\u5386\u7684\u4F4D\u7F6E\uFF0C\u7EC8\u6B62\u6761\u4EF6\u662F\u5F53\u524D\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u7B49\u4E8E\u76EE\u6807\u5B57\u7B26\u4E32\u3002</p></li><li><p>\u7528\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u8FDB\u884C\u5B58\u50A8\u7ED3\u679C\u3002</p><div class="language-"><pre><code>function letterCombinations(digits: string): string[] {
    let map = new Map();
    map.set(&#39;2&#39;, &#39;abc&#39;);
    map.set(&#39;3&#39;, &#39;def&#39;);
    map.set(&#39;4&#39;, &#39;ghi&#39;);
    map.set(&#39;5&#39;, &#39;jkl&#39;);
    map.set(&#39;6&#39;, &#39;mno&#39;);
    map.set(&#39;7&#39;, &#39;pqrs&#39;);
    map.set(&#39;8&#39;, &#39;tuv&#39;);
    map.set(&#39;9&#39;, &#39;wxyz&#39;);

    let res = [];
    let len = digits.length;
    if(len === 0) return [];
    if(len === 1) return Array.from(map.get(digits));
    const dfs = function(curStr, i) {
        //\u7EC8\u6B62\u6761\u4EF6
        if(i === len){
            res.push(curStr.slice().join(&#39;&#39;));
            return;
        }
        //\u9012\u5F52
        let cur = map.get(digits[i]);
        for (let j = 0; j &lt; cur.length; j++) {
            curStr.push(cur[j]);
            dfs(curStr, i+1);
            curStr.pop();
        }
    }
    dfs([], 0);
    return res;
};
</code></pre></div></li></ol><h2 id="review\uFF1Ahow-to-write-performant-react-code-rules-patterns-do-s-and-don-ts" tabindex="-1">Review\uFF1A<a href="https://www.developerway.com/posts/how-to-write-performant-react-code" target="_blank" rel="noopener noreferrer">How to write performant React code: rules, patterns, do&#39;s and don&#39;ts</a> <a class="header-anchor" href="#review\uFF1Ahow-to-write-performant-react-code-rules-patterns-do-s-and-don-ts" aria-hidden="true">#</a></h2><blockquote><p>Also, considering that in 90% of the cases performance problems in React can be summarised as \u201Ctoo many re-renders\u201D,</p></blockquote><p>So let\u2019s refresh <strong>when React components re-render</strong>:</p><ul><li>when props or state have changed</li><li>when parent component re-renders</li><li>when a component uses context and the value of its provider changes</li></ul><p>And the rules we extracted:</p><p><strong>Rule #1</strong>: If the only reason why you want to extract your inline functions in props into <code>useCallback</code> is to avoid re-renders of children components: don\u2019t. It doesn\u2019t work.</p><p><strong>Rule #2</strong>: If your component manages state, find parts of the render tree that don\u2019t depend on the changed state and memoise them to minimize their re-renders.</p><p><strong>Rule #3</strong>. <em>Never</em> create new components inside the render function of another component.</p><p><strong>Rule #4</strong>. When using context, make sure that <code>value</code> property is <em>always</em> memoised if it\u2019s not a number, string or boolean.</p><h3 id="review\uFF1Aunderstanding-referential-equality-in-react" tabindex="-1">Review\uFF1A<a href="https://blog.bitsrc.io/understanding-referential-equality-in-react-a8fb3769be0" target="_blank" rel="noopener noreferrer">Understanding Referential Equality in React</a> <a class="header-anchor" href="#review\uFF1Aunderstanding-referential-equality-in-react" aria-hidden="true">#</a></h3><p>The Comparison Algorithm \u2014 <a href="http://Object.is" target="_blank" rel="noopener noreferrer">Object.is</a>()</p><p>The <code>Object.is()</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description" target="_blank" rel="noopener noreferrer">algorithm</a> determines whether two values are the same if:</p><ol><li>Both values are <code>undefined</code> or <code>null</code>.</li><li>Both values are either <code>true</code> or <code>false</code>.</li><li>Both values are <code>Strings</code> having the same characters, length, and order.</li><li>Both values are <code>Numbers</code> with the same value or <code>NaN</code>.</li><li>Both values are <code>Objects</code> that point to one memory location.</li></ol><p>React applies these rules to re-render components whenever a state change is made</p><p>\u5BF9\u8C61\u7684\u5C5E\u6027\u53D1\u751F\u53D8\u5316\uFF0C\u5BF9\u8C61\u6BD4\u8F83\u7684\u662F\u6570\u636E\u6240\u6307\u5730\u5740\u662F\u5426\u76F8\u540C\u800C\u4E0D\u662Fvalue\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u5F15\u8D77re-render\u3002\u60F3\u8BA9\u5BF9\u8C61\u8FDB\u884C\u66F4\u65B0\uFF0C\u53EF\u4EE5\u65B0\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u6539\u53D8\u6240\u6307\u5730\u5740\uFF0C\u89C6\u56FE\u5C31\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><div class="language-"><pre><code>const changeNameToJohn = () =&gt; {
   mySelf.name = &quot;John&quot;;
   mySelf.age = 30;
   console.log(mySelf);
   setMySelf(mySelf);
};
</code></pre></div><div class="language-"><pre><code>const changeNameToJohn = () =&gt; {
   setMySelf({ ...mySelf, name: &#39;John&#39; });
}
</code></pre></div><h2 id="tip\uFF1A\u5728ide\u5FEB\u901F\u9884\u89C8ui\u7EC4\u4EF6" tabindex="-1">Tip\uFF1A\u5728IDE\u5FEB\u901F\u9884\u89C8UI\u7EC4\u4EF6 <a class="header-anchor" href="#tip\uFF1A\u5728ide\u5FEB\u901F\u9884\u89C8ui\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>Preview.js,\u53EF\u4EE5\u5728 VS Code \u6216 JetBrains IDE \u4E2D\u5F00\u7BB1\u5373\u7528\uFF0C\u4E0E React \u548C Vue \u6784\u5EFA\u7684\u7EC4\u4EF6\u517C\u5BB9\u3002</p><p><a href="https://previewjs.com/docs" target="_blank" rel="noopener noreferrer">https://previewjs.com/docs</a></p>`,33),i=[a];function s(l,d,c,p,h,u){return r(),n("div",null,i)}var f=e(o,[["render",s]]);export{m as __pageData,f as default};
