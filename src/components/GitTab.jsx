import React from "react";
import Prism from "prismjs";
import "../prism.css";
import Styles from "./GitTab.module.css";
import { useEffect } from "react";

import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

export default function GitTab() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={Styles.container}>
      <h3>SETUP & INIT</h3>

      <p>initialize an existing directory as a Git repository</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git init`}</code>
        </pre>
      </div>
      <p>retrieve an entire repository from a hosted location via URL</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git clone [url]`}</code>
        </pre>
      </div>

      <h3>STAGE & SNAPSHOT </h3>
      <p>
        show modified files in working directory, staged for your next commit
      </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git status`}</code>
        </pre>
      </div>
      <p className="copy-to-clipboard">
        show modified files in working directory, staged for your next commit
      </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git add [file]`}</code>
        </pre>
      </div>
      <p>unstage a file while retaining the changes in working directory</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git reset [file]`}</code>
        </pre>
      </div>
      <p>diff of what is changed but not staged</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git diff`}</code>
        </pre>
      </div>
      <p>diff of what is staged but not yet commited</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git diff --staged`}</code>
        </pre>
      </div>
      <p>commit your staged content as a new commit snapshot</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git commit -m “[descriptive message]”`}</code>
        </pre>
      </div>
      <h3>BRANCH & MERGE</h3>
      <p>
        list your branches. a * will appear next to the currently active branch
      </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git branch`}</code>
        </pre>
      </div>

      <p>create a new branch at the current commit</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git branch [branch-name]`}</code>
        </pre>
      </div>
      <p>
        switch to another branch and check it out into your working directory
      </p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git checkout`}</code>
        </pre>
      </div>
      <p>merge the specified branch’s history into the current one</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git merge [branch]`}</code>
        </pre>
      </div>
      <p>show all commits in the current branch’s history</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git log`}</code>
        </pre>
      </div>
      <h3>INSPECT & COMPARE</h3>

      <p>show the commit history for the currently active branch</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git log`}</code>
        </pre>
      </div>
      <p>show the commits on branchA that are not on branchB</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git log branchB..branchA`}</code>
        </pre>
      </div>
      <p>show the commits that changed file, even across renames</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git log --follow [file]`}</code>
        </pre>
      </div>
      <p>show the diff of what is in branchA that is not in branchB</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git diff branchB...branchA`}</code>
        </pre>
      </div>
      <p>show any object in Git in human-readable format</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git show [SHA]`}</code>
        </pre>
      </div>
      <h3>TEMPORARY COMMITS</h3>

      <p>Save modified and staged changes</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git stash`}</code>
        </pre>
      </div>
      <p>list stack-order of stashed file changes</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git stash list`}</code>
        </pre>
      </div>
      <p>write working from top of stash stack</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git stash pop`}</code>
        </pre>
      </div>
      <p>discard the changes from top of stash stack</p>
      <div>
        <pre className="copy-to-clipboard">
          <code className="language-git">{`git stash drop`}</code>
        </pre>
      </div>
    </div>
  );
}
