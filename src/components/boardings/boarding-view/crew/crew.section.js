import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import TextViewer from "../../../partials/text-viewer/text-viewer";

class CrewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      crew: props.dataObject.crew,
      captain: props.dataObject.captain,
    };
  }

  render() {
    const { crew, captain } = this.state;
    const { t } = this.props;

    return (
      <div className="flex-column">
        <div className="item-name margin-left margin-top">{t("TABLE.CAPTAIN")}</div>
        <section className="flex-row justify-between box-shadow padding white-bg margin-top">
          <TextViewer mainText={captain.name} subText={t("TABLE.NAME")} />
          <TextViewer
            mainText={captain.license}
            subText={t("TABLE.LICENSE_NUMBER")}
          />
          <TextViewer
            mainText="N/A"
            subText={t("BOARDING_PAGE.VIEW_BOARDING.PHOTOS")}
          />
          <TextViewer
            mainText={captain.attachments.notes[0]}
            subText={t("BOARDING_PAGE.VIEW_BOARDING.NOTES")}
          />
        </section>
        <div className="item-name margin-left margin-top margin-bottom">
          {t("NAVIGATION.CREW")}
        </div>
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr className="table-row row-head border-bottom">
                <td>{t("TABLE.NAME")}</td>
                <td>{t("TABLE.LICENSE_NUMBER")}</td>
                <td>{t("BOARDING_PAGE.VIEW_BOARDING.PHOTOS")}</td>
                <td>{t("BOARDING_PAGE.VIEW_BOARDING.NOTES")}</td>
              </tr>
            </thead>
            <tbody>
              {crew.map((item, ind) => (
                <tr className="table-row row-body" key={ind}>
                  <td>{item.name}</td>
                  <td>{item.license}</td>
                  <td>N/A</td>
                  <td>{item.attachments.notes[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withTranslation("translation")(CrewSection);
