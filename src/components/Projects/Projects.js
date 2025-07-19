import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images for the 4 completed sections
import reportImg from "../../Assets/Projects/report.png.png";
import pptImg from "../../Assets/Projects/ppt.png.png";
import excelImg from "../../Assets/Projects/excel.png.png";
import powerbiImg from "../../Assets/Projects/POWER_BI.png";

// Placeholder images for future sections
import pythonImg from "../../Assets/Projects/python.png";
import rImg from "../../Assets/Projects/Rcode.png";
import sipImg from "../../Assets/Projects/SIP.png";
import cipImg from "../../Assets/Projects/CIP.png";
import researchImg from "../../Assets/Projects/paper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects/resources I’ve uploaded recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Report Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reportImg}
              title="Report Files"
              description="Access my detailed reports and case studies."
              files={[
                { name: "Business Plan BECO", path: "/projects/report_files/business_plan_BECO.docx" },
                { name: "Marketing Rolls Royce", path: "/projects/report_files/marketing_rolls_royce.docx" },
                { name: "BluSmart Business Plan", path: "/projects/report_files/BluSmart_Business_Plan.docx" },
                { name: "RAC Report Car 24", path: "/projects/report_files/RAC_Report_Car_24.docx" },
                { name: "LT 9 DeHaat CAPSTONE PROJECT", path: "/projects/report_files/LT9_DeHaat_CAPSTONE_PROJECT.pdf" },
                { name: "ML Comprehensive Analysis", path: "/projects/report_files/ML_comprehensive_business_analysis_report.pdf" },
                { name: "Recruitment and Training Report", path: "/projects/report_files/Recruitment_and_Training_Development_Practices.pdf" },
                { name: "Operation Management Report", path: "/projects/report_files/Operation_Management_Report_Lean_Manufacturing.docx" },
                { name: "Marketing Plan for Khadim", path: "/projects/report_files/Marketing_Plan_for_Khadim_Formatted_v2.docx" },
                { name: "Swiggy Team Report", path: "/projects/report_files/swiggy_team_report.pdf" },
                { name: "Data Analytics using Python", path: "/projects/report_files/Data_Analytics_using_Python.docx" },
                { name: "BRM Group Research Report", path: "/projects/report_files/BRM_GROUP_RESEARCH_REPORT.pdf" },
                { name: "Article on Quality Education", path: "/projects/report_files/AN_ARTICLE_ON_QUALITY_EDUCATION.pdf" },
                { name: "A Report on Diversity", path: "/projects/report_files/A_REPORT_ON_DIVERSITY.docx" },
                { name: "Predictive Model Plan", path: "/projects/report_files/Predictive_Model_Plan.docx" },
                { name: "UTKARSH ANAND FE", path: "/projects/report_files/UTKARSH_ANAND_FE.pdf" },
                { name: "FS Mutual Fund Comparison", path: "/projects/report_files/FS_MUTUAL_FUND_COMPARISION.pdf" },
                { name: "ML Individual Report", path: "/projects/report_files/ML_individual.docx" },
                { name: "Article on Quality Education (Updated)", path: "/projects/report_files/AN_ARTICLE_ON_QUALITY_EDUCATION[1].docx" },
                { name: "REPORT STATISTICAL ANALYSIS", path: "/projects/report_files/REPORT_STATISTICAL__ANALYSIS__AND___DECISION__.docx" },
                {name: "Field Project HBO", path: "/projects/report_files/field_project_HBO.docx"},
                {name: " AI in Finance", path:"/projects/report_files/Artificial_Intelligence_in_Finance.docx"},
                {name:"Monetary policy influence in indian economy",path:"/projects/report_files/Monetary_Policy_Influence_Price_Stability_in_the_Indian_Economy.docx"},
              ]}
            />
          </Col>

          {/* PPT Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pptImg}
              title="PPT Files"
              description="Explore presentations on key topics."
              files={[
                { name: "Swiggy Health Bites", path: "/projects/ppt_files/presenatation_amm_swiggy_health_bites.pptx" },
                { name: "Driving Luxury - Rolls-Royce", path: "/projects/ppt_files/Driving_Luxury_A_Deep_Dive_into_Rolls-Royce.pptx" },
                { name: "Oracle Product Insights", path: "/projects/ppt_files/Oracle_Product_Manager_Insights.pptx" },
                { name: "Nexora Solutions HCM", path: "/projects/ppt_files/Nexora_Solutions_HCM.pptx" },
                { name: "Field Project PPT - Recruitment & Training", path: "/projects/ppt_files/FIELD_PROJECT_PPT_Recruitment_and_Training.pptx" },
                { name: "Python PPT", path: "/projects/ppt_files/python_ppt.pptx" },
                { name: "Consumer Decision-Making Analysis", path: "/projects/ppt_files/Consumer_Decision-Making_Analysis.pptx" },
                { name: "CARS24 RAC", path: "/projects/ppt_files/CARS24_RAC.pptx" },
                { name: "BRM PPT", path: "/projects/ppt_files/BRM_PPT.pptx" },
                { name: "Article on Quality Education", path: "/projects/ppt_files/AN_ARTICLE_ON_QUALITY_EDUCATION.pptx" },
                { name: "FSA PPT ON MOTILAL", path: "/projects/ppt_files/FSA_PPT_ON_MOTILAL.pdf" },
                { name: "UTKARSH ANAND 24PGDM146", path: "/projects/ppt_files/UTKARSH_ANAND_24PGDM146.pptx" },
                { name: "Global Shipping Challenges", path: "/projects/ppt_files/Operational_Challenges_in_the_Global_Shipping.pptx" },
                { name: "Service Costs in Transport", path: "/projects/ppt_files/Comparative_Analysis_of_Service_Costs_in_the_Transport.pptx" },
              ]}
            />
          </Col>

          {/* Excel Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excelImg}
              title="Financial Data"
              description="Excel sheets with financial data insights."
              files={[
                { name: "CF WAAC COD ETC", path: "/projects/excel_files/CF_WAAC_COD_ETC.xlsx" },
                { name: "FSA MOTILAL", path: "/projects/excel_files/FSA_MOTILAL.xlsx" },
                { name: "FSA THREE TIER COMPANY COMPARISION", path: "/projects/excel_files/FSA_THREE_TIER_COMPANY_COMPARISION.xlsx" },
                { name: "FSA INFOSYS", path: "/projects/excel_files/FSA_INFOSYS.xlsx" },
                { name: "CF ASSIGNMENT", path: "/projects/excel_files/CF_ASSIGNMENT.xlsx" },
                { name: "JSW DATA WITH DUO POINT", path: "/projects/excel_files/JSW_DATA_WITH_DUO_POINT.xlsx" },
                { name: "FSA SCENERIO ANALYSIS", path: "/projects/excel_files/FSA_SCENERIO_ANALYSIS.xlsx" },
                { name: "FSA FMCG COMPANY", path: "/projects/excel_files/FSA_FMCG_COMPANY.xlsx" },
                { name: "TATA INVESTMENT DATA", path: "/projects/excel_files/TATA_INVESTMENT_DATA.xlsx" },
                { name: "FSA 1 ADANI", path: "/projects/excel_files/FSA_1_ADANI.xlsx" },
                { name: "FINAL Reliance Industries Limited", path: "/projects/excel_files/FINAL_Reliance_Industries_Limited.xlsx" },
                { name: "FSA LEARNING KPI's", path: "/projects/excel_files/FSA_LEARNING_KPIs.xlsx" },
                { name: "Dashboard of Financial Statement", path: "/projects/excel_files/dashboard_of_financial_statement.xlsx" },
                { name: "SADM Dashboard", path: "/projects/excel_files/sadm_dashboard.xlsx" },
                { name: "Excel Dashboard 2", path: "/projects/excel_files/EXCEL_DASHBOARD_2.xlsx" },
                { name: "Excel Dashboard", path: "/projects/excel_files/EXCEL_DASHBOARD.xlsx" },
                { name: "Sales Report Dashboard", path: "/projects/excel_files/sales_report_dashboard.xlsx" },
                { name: "Tata Elxsi Financial Data", path: "/projects/excel_files/tata_elxsi_financial_data.xlsx" },
                { name: "LTI Mindtree", path: "/projects/excel_files/LTI_Mindtree.xlsx" },
                { name: "ITC Financial Data", path: "/projects/excel_files/ITC_FINANCIAL_DATA.xlsx" },
                { name: "Nestle Dashboard Financial Data", path: "/projects/excel_files/nestle_dashboard_financial_data.xlsx" },
                {name:"Bajaj Holdings and investment", path:"/projects/excel_files/Bajaj_Holdings_and_investment.xlsx"},
              ]}
            />
          </Col>

          {/* Power BI Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerbiImg}
              title="Power BI Files"
              description="Interactive Power BI dashboards and reports."
              files={[
                { name: "1st Dashboard", path: "/projects/powerBI_file/1st_dashboard.pbix" },
                { name: "2nd Dashboard", path: "/projects/powerBI_file/2nd_dashboard.pbix" },
                { name: "3rd Dashboard", path: "/projects/powerBI_file/3rd_dashboard.pbix" },
                { name: "4th Dashboard", path: "/projects/powerBI_file/4th_dashboard.pbix" },
                { name: "5th Dashboard", path: "/projects/powerBI_file/5th_dashboard.pbix" },
                { name: "6th Dashboard", path: "/projects/powerBI_file/6th_dashboard.pbix" }, 
              ]}
            />
          </Col>

          {/* Placeholder sections for future file uploads */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              title="Python Files"
              description="Code used in python."
              files={[
                { name: "code 1", path: "/projects/Python_files/Advanced_Forex_Trading_Bot.ipynb" },
                { name: "code 2", path: "/projects/Python_files/mt5BOT (1).ipynb" },
                { name: "code 3", path: "/projects/Python_files/mt5BOT.ipynb" },
                { name: "code 4", path: "/projects/Python_files/research.ipynb" },
                { name: "code 5", path: "/projects/Python_files/Untitled1 (1).ipynb" },
                { name: "code 6", path: "/projects/Python_files/Untitled1.ipynb" },
                { name: "code 7", path: "/projects/Python_files/Untitled1 (2).ipynb" },
                { name: "code 8", path: "/projects/Python_files/Untitled2.ipynb" },
                { name: "code 9", path: "/projects/Python_files/Untitled2 (1).ipynb" },
                { name: "code 10", path: "/projects/Python_files/Untitled3.ipynb" },
                { name: "code 11", path: "/projects/Python_files/Untitled4.ipynb" },
                { name: "code 12", path: "/projects/Python_files/Untitled5.ipynb" },
                { name: "code 13", path: "/projects/Python_files/Untitled6.ipynb" },
                { name: "code 14", path: "/projects/Python_files/Untitled7.ipynb" },
                { name: "code 15", path: "/projects/Python_files/Untitled8.ipynb" },
                { name: "code 16", path: "/projects/Python_files/Untitled10.ipynb" },
                { name: "code 17", path: "/projects/Python_files/Untitled11.ipynb" },
                { name: "code 18", path: "/projects/Python_files/Untitled12.ipynb" },
                { name: "code 19", path: "/projects/Python_files/Untitled13.ipynb" },
                { name: "code 20", path: "/projects/Python_files/Untitled14.ipynb" },
                { name: "code 21", path: "/projects/Python_files/Untitled22.ipynb" },
                { name: "code 22", path: "/projects/Python_files/27nov.ipynb" },
                { name: "code 23", path: "/projects/Python_files/CLASS(1).ipynb" },
                { name: "code 24", path: "/projects/Python_files/CLASS1.ipynb" },
                { name: "code 25", path: "/projects/Python_files/CLASS2.ipynb" },
                { name: "code 26", path: "/projects/Python_files/CLASS2(1).ipynb" },
                { name: "code 27", path: "/projects/Python_files/CLASS3.ipynb" },
                { name: "code 28", path: "/projects/Python_files/CLASS3(1).ipynb" },
                { name: "code 29", path: "/projects/Python_files/CLASS4.ipynb" },
                { name: "code 30", path: "/projects/Python_files/Classification_Logistic_Regression(2).ipynb" },
                { name: "code 31", path: "/projects/Python_files/HeatMapLE.ipynb" },
                { name: "code 32", path: "/projects/Python_files/Logistic_Regression.ipynb" },
                { name: "code 33", path: "/projects/Python_files/project.ipynb" },
                { name: "code 34", path: "/projects/Python_files/StockPricePrediction_Project_1.ipynb" },

              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rImg}
              title="R Code"
              description="Code used in R Studo."
              files={[
                { name: "R Code", path: "/projects\R_files\.RData" },
                { name: "Panel code", path: "/projects\R_files\Panel_code.R" },
            ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sipImg}
              title="SIP"
              description="Report PPT and Poster for SIP."
              files={[
                { name: "SIP Report", path: "/projects/SIP_files/FINAL_SIP_REPORT.docx" },
                { name: "SIP Certificate", path: "/projects/SIP_files\Utkarsh_Anand_certificate_sip.pdf" },
                { name: "SIP Poster", path: "/projects/SIP_files/Sip_poster.jpg" },
                { name: "SIP PPT", path: "/projects/SIP_files/Social-Internship-Program-SIP-at-Udayan-Care.pptx" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cipImg}
              title="CIP"
              description="CIP Report and PPT ."
              files={[
                { name: "CIP Report", path: "/projects/CIP_files/cip_report.pdf" },
                { name: "CIP PPT", path: "/projects/CIP_files/cip_final_ppt.pptx" },
                { name: "CIP Certificate", path: "/projects/CIP_files/Utkarsh_Anand(1).pdf" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={researchImg}
              title="Research Paper"
              description="Research paper on various topics."
              files={[
                { name: "Research Paper Multimodel Forecasting of Technology-Focused", path: "/projects/Research_files/183-2(2).pdf" },
                { name: "Research Paper Certificate", path: "/projects/Research_files/183(2).pdf" },
                { name: "Research Paper on Portfolio management", path: "/projects/Research_files/utkarsh(6).pdf" },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;



