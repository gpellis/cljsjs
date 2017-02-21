(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.5.2" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "1.0.6")
(def +version+ (str +lib-version+ "-0"))

(task-options!
  pom  {:project     'cljsjs/sjcl
        :version     +version+
        :description "Stanford Javascript Crypto Library"
        :url         "http://bitwiseshiftleft.github.io/sjcl/"
        :license     {"BSD" "https://opensource.org/licenses/BSD-3-Clause"}
        :scm         {:url "https://github.com/cljsjs/packages"}})

(deftask package []
  (comp
   (download :url (format "https://raw.githubusercontent.com/bitwiseshiftleft/sjcl/%s/sjcl.js" 
                          +lib-version+)
             :checksum "D7DC40AD6718245B6B5F158F621FC4E4"
             :unzip false)

   (sift :move {#"^sjcl.js" "cljsjs/sjcl/development/sjcl.inc.js"
                #"^sjcl.js" "cljsjs/sjcl/production/sjcl.min.inc.js"})

   (sift :include #{#"^cljsjs"})

   (deps-cljs :name "cljsjs.sjcl")
   (pom)
   (jar)))
