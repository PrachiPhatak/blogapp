export default function About(props) {
    console.log("Props on about page "+ props)
    return `
        <main>
        <div class="container p-5 shadow-lg border mt-3">
            <div class="row row-cols-1 mx-auto">
                <div>
            <div class="WI9k4c" style="display: table; word-break: break-word; color: rgb(32, 33, 36); font-family: Roboto, arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <div class="jY7QFf" style="min-height: 36px; margin-bottom: 0px; line-height: normal;">
        <div class="c8d6zd ya2TWb DgZBFd" style='font-family: "Google Sans", Roboto, arial, sans-serif; letter-spacing: normal; color: rgb(32, 33, 36); font-size: 28px; font-weight: 400; line-height: 36px; vertical-align: top; margin-top: -6px;'><span data-dobid="hdw">blog</span></div>
    </div>
    <div class="S23sjd" style="padding-top: 8px;"><span class="LTKOO" style="letter-spacing: normal; font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 22px;">/bl&auml;ɡ/</span></div>
    <div aria-hidden="true" class="K6GhFd" data-is-bilingual="false" style="max-height: 0px; opacity: 0; pointer-events: none; transition: max-height 0.3s ease 0s, opacity 0.3s ease 0s;">
        <div class="b8aKlc" style="padding: 8px 0px 6px;"><a href="https://www.google.com/search?sxsrf=ALeKk00o9Hd-HXSpKn-lHgAc-DOPXW4K6A:1629917458978&q=how+to+pronounce+blog&stick=H4sIAAAAAAAAAOMIfcRoxi3w8sc9YSndSWtOXmNU5-INKMrPK81LzkwsyczPExLgYglJLcoV4pBi42JJyslPt2JRYkrN41nEKpqRX65Qkq9QAFSfD9SQqgCSBgBdvaJWUwAAAA&pron_lang=en&pron_country=us&sa=X&ved=2ahUKEwjz5Z7Z68zyAhWJW80KHaVFDocQ3eEDegQIBRAH" style="color: rgb(26, 13, 171); text-decoration: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); outline: 0px;" tabindex="-1">
                <div class="S5TwIf" style="display: inline-block; padding-right: 12px; box-shadow: rgb(218, 220, 224) 0px 0px 0px 1px inset; border-radius: 6px; overflow: hidden; vertical-align: top;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPGRlZnM+CiAgICA8cG9seWdvbiBpZD0ic21hbGwtdmlzZW1lLXYzLWEiIHBvaW50cz0iMCAwIDMyIDAgMzIgMzIgMCAzMiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPG1hc2sgaWQ9InNtYWxsLXZpc2VtZS12My1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjc21hbGwtdmlzZW1lLXYzLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iIzQyODVGNCIgeGxpbms6aHJlZj0iI3NtYWxsLXZpc2VtZS12My1hIi8+CiAgICA8cGF0aCBmaWxsPSIjRDJFM0ZDIiBkPSJNMCwxNS4yMzk3OTYzIEMyLjU0Mzg1NzE0LDE4Ljg3MDUyMDMgNS42NTIsMjIuMDgyMTk0NiA5LjIwMjI4NTcxLDI0Ljc0NDg3NjkgQzEzLjIxMTU3MTQsMjcuNzUxNzA3NyAxOC43ODg0Mjg2LDI3Ljc1MTcwNzcgMjIuNzk3NzE0MywyNC43NDQ4NzY5IEMyNi4zNDgsMjIuMDgyMTk0NiAyOS40NTYxNDI5LDE4Ljg3MDUyMDMgMzIsMTUuMjM5Nzk2MyBMMzIsLTcgTDAsLTcgTDAsMTUuMjM5Nzk2MyBaIiBtYXNrPSJ1cmwoI3NtYWxsLXZpc2VtZS12My1iKSIvPgogICAgPHBhdGggZmlsbD0iIzQyODVGNCIgZmlsbC1vcGFjaXR5PSIuNiIgZD0iTTE2LDIxLjIzMDY0OTIgQzE2LjkyNjA5OTEsMjEuMjMwNjQ5MiAxNy43OTEyNDY3LDIxLjQ5NDMxNTcgMTguNTI3MjEzNSwyMS45NTE1MDE5IEMxOC44MTA0NDEsMjIuMTI3MzMwOSAxOS4xMzYyNzM4LDIxLjc4ODc0ODUgMTguOTQwMzc5OSwyMS41MTY0Njc0IEMxOC4yNzg1NTU2LDIwLjU5NzMyNjMgMTcuMjA4MTEzNiwyMCAxNiwyMCBDMTQuNzkxODg2NCwyMCAxMy43MjE0NDQ0LDIwLjU5NzMyNjMgMTMuMDU5NjIwMSwyMS41MTY0Njc0IEMxMi44NjM3MjYyLDIxLjc4ODc0ODUgMTMuMTg5NTU5LDIyLjEyNzMzMDkgMTMuNDcyNzg2NSwyMS45NTE1MDE5IEMxNC4yMDg3NTMzLDIxLjQ5NDMxNTcgMTUuMDczOTAwOSwyMS4yMzA2NDkyIDE2LDIxLjIzMDY0OTIiIG1hc2s9InVybCgjc21hbGwtdmlzZW1lLXYzLWIpIi8+CiAgICA8cGF0aCBzdHJva2U9IiM0Mjg1RjQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0yNSwxMyBDMjMsMTUuMzMzMzMzMyAyMCwxNi41IDE2LDE2LjUgQzEyLDE2LjUgOSwxNS4zMzMzMzMzIDcsMTMgTDEzLDEwLjUgTDE5LDEwLjUgTDI1LDEzIFoiIG1hc2s9InVybCgjc21hbGwtdmlzZW1lLXYzLWIpIi8+CiAgICA8cG9seWdvbiBmaWxsPSIjNDI4NUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iOCAxNCA3IDEzIDI1IDEzIDI0IDE0IiBtYXNrPSJ1cmwoI3NtYWxsLXZpc2VtZS12My1iKSIvPgogICAgPHBhdGggc3Ryb2tlPSIjNDI4NUY0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMCwzIEwxNy43Njc4NzUsNS4yNTg5MjYyMiBDMTYuNzkxNSw2LjI0NzAyNDU5IDE1LjIwODUsNi4yNDcwMjQ1OSAxNC4yMzIxMjUsNS4yNTg5MjYyMiBMMTIsMyIgbWFzaz0idXJsKCNzbWFsbC12aXNlbWUtdjMtYikiLz4KICA8L2c+Cjwvc3ZnPgo=" class="rISBZc zr758c M4dUYb" height="32" width="32" alt="" data-atf="1" data-frt="0" style="margin: 0 auto 0 0; text-align: left; display: block; border: 0px;"><span class="fe69if" style="margin-left: 10px; vertical-align: middle;">Learn to pronounce</span></div>
            </a></div>
    </div>
</div>
<div class="ABgcGb vmod" style="color: rgb(32, 33, 36); font-family: Roboto, arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><br></div>
<div class="vmod" style="color: rgb(32, 33, 36); font-family: Roboto, arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <div class="vmod" data-topic="">
        <div class="lW8rQd" style="display: flex;">
            <div class="pgRvse YrbPuc vdBwhd" style="color: rgb(112, 117, 122); font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 22px; padding-top: 4px; min-height: 20px;"><em><span class="YrbPuc" style="color: rgb(112, 117, 122); font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 22px;">noun</span></em></div>
            <div aria-hidden="true" class="xpdxpnd" data-mh="-1" style="overflow: hidden; transition: max-height 0.3s ease 0s; max-height: 0px;"><br></div>
        </div>
        <ol class="eQJLDd" style="margin: 0px; padding: 0px 0px 0px 20px; display: flex; flex-direction: column;">
            <li style="margin: 0px; padding: 0px; list-style: none;">
                <div class="vmod">
                    <div class="thODed" style="padding-top: 8px;">
                        <div class="LTKOO sY7ric" data-topic="" style="letter-spacing: normal; font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 16px;">
                            <div style="margin-left: 20px;">
                                <div class="LTKOO sY7ric" style="letter-spacing: normal; font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 16px;">
                                    <div data-dobid="dfn" style="display: inline;">a regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style.</div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: 20px;"><br></div>
                    </div>
                </div>
            </li>
        </ol>
    </div>
    <div class="vmod" data-topic="">
        <div class="lW8rQd" style="display: flex;">
            <div class="pgRvse YrbPuc vdBwhd" style="color: rgb(112, 117, 122); font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 22px; padding-top: 4px; min-height: 20px;"><em><span class="YrbPuc" style="color: rgb(112, 117, 122); font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 22px;">verb</span></em></div>
            <div aria-hidden="true" class="xpdxpnd" data-mh="-1" style="overflow: hidden; transition: max-height 0.3s ease 0s; max-height: 0px;"><br></div>
        </div>
        <ol class="eQJLDd" style="margin: 0px; padding: 0px 0px 0px 20px; display: flex; flex-direction: column;">
            <li style="margin: 0px; padding: 0px; list-style: none;">
                <div class="vmod">
                    <div class="thODed" style="padding-top: 8px;">
                        <div class="LTKOO sY7ric" data-topic="" style="letter-spacing: normal; font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 16px;">
                            <div style="margin-left: 20px;">
                                <div class="LTKOO sY7ric" style="letter-spacing: normal; font-family: Roboto, arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 16px;">
                                    <div data-dobid="dfn" style="display: inline;">add new material to or regularly update a blog.</div>
                                    <div class="vmod">
                                        <div class="ubHt5c" style="color: rgb(112, 117, 122);">&quot;it&apos;s about a week since I last blogged&quot;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ol>
    </div>
</div>
        </div>
            </div>
        </div>
        </main>
    `;
}