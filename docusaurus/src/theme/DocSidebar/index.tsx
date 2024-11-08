import React, { useEffect, useMemo, useRef } from "react";
import DocSidebar from "@theme-original/DocSidebar";
import type DocSidebarType from "@theme/DocSidebar";
import type { WrapperProps } from "@docusaurus/types";
import { useLocation, useHistory } from "react-router-dom";
import { DocSearch } from "@docsearch/react";
import Link from "@docusaurus/Link";
import { EN_DOC_OPTIONS, EN_TRANSLATIONS, ZH_DOC_OPTIONS, ZH_TRANSLATIONS } from "@site/src/constants";
import { Cascader, Tooltip } from "antd";

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const languages = ["en", "zh"];

  const getCurrentLanguage = () => {
    const segments = pathname.split("/");
    return languages.find((lang) => segments.includes(lang)) || "en";
  };

  const Hit: React.FC = ({ hit, children }) => {
    console.log(hit, "hit");
    return <Link to={hit.url}>{children}</Link>;
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      const currentPath = window.location.pathname;
      window.parent.postMessage({ path: currentPath }, "*");
    });
    window.addEventListener("hashchange", () => {
      const currentPath = window.location.pathname;
      const hash = window.location.hash;
      window.parent.postMessage({ path: currentPath + hash }, "*");
    });
  }, []);

  const getTranslationsByLanguage = (lang: string) => {
    if (lang === "zh") {
      return ZH_TRANSLATIONS;
    }
    return EN_TRANSLATIONS;
  };

  const getPlaceholderByLanguage = (lang: string) => {
    if (lang === "zh") {
      return "搜索文档";
    }
    return "Search docs";
  };

  const getDescByLanguage = (lang: string) => {
    if (lang === "zh") {
      return '实时图计算引擎';
    }
    return 'Streaming Graph Computing Engine';
  };


  const getOptions = (lang: string) => {

    if (lang === "zh") {
      return ZH_DOC_OPTIONS;
    }
    return EN_DOC_OPTIONS;
  };

  const navigator = useRef({
    navigate({ itemUrl }: { itemUrl?: string }) {
      history.push(itemUrl!);
    },
  }).current;

  const indexName = useMemo(() => {
    const lang = getCurrentLanguage();

    return lang === "zh" ? "tugraphAnalyticsZH" : "tugraphAnalyticsEN";
  }, [location.pathname]);

  const onVersionChange = (values) => {
    const [type, version] = values
    if (type === 'TuGraph_Analytics') {
      // TODO 调数据中心文档
      return
    }

    if (type === 'TuGraph_Learn') {
      // TODO 图学习引擎
      return
    }

    if (type === 'TuGraph_DB') {
      window.location.href = `https://liukaiming-alipay.github.io/tugraph-db/${getCurrentLanguage()}/${version}/guide`;
      return
    }
  };

  return (
    <div
      className="docsearch-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: '8px' }}>
        <Cascader
          allowClear={false}
          value={['TuGraph_Analytics']}
          options={getOptions(getCurrentLanguage())}
          onChange={onVersionChange}
        >
          <div className="itemWrapper">
            <div className="titleBlock">
              <span className="titleText">TuGraph Analytics</span>
              <div
                className="downIcon"
              />
            </div>
            <div className="contentArea">
              <span id="engineDescription">{getDescByLanguage(getCurrentLanguage())}</span>
            </div>
          </div>
        </Cascader>

        <Tooltip title={getPlaceholderByLanguage(getCurrentLanguage())}>
          <div className="searchWrapper">
            <DocSearch
              {...{
                apiKey: "3c4b435fb8814030c3a6672abc015ff2",
                indexName,
                appId: "HO4M21RAQI",
                hitComponent: Hit,
                transformItems: (items) => {
                  return items.map((item) => {
                    return {
                      ...item,
                      url:
                        "/tugraph-analytics" +
                        item?.url?.split("/tugraph-analytics")[1] ?? "",
                    };
                  });
                },
                navigator: navigator,
                translations: getTranslationsByLanguage(getCurrentLanguage()),
                placeholder: getPlaceholderByLanguage(getCurrentLanguage()),
              }}
            />
          </div>
        </Tooltip>

      </div>
      <DocSidebar {...props} />
    </div>
  );
}