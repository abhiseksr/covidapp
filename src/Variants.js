import React from "react";
import Heading from "./Heading";


class Variants extends React.Component{
    render(){
        return (
            <div className="parent">
            {/* <Heading data={this.props.data.country_name} /> */}
                <Heading data={"Variants"} />
            <div className="Variants">
                <p>For these variants, clear evidence is available indicating a significant impact on transmissibility, severity and/or immunity that is likely to have an impact on the epidemiological situation in the EU/EEA. The combined genomic, epidemiological, and in-vitro evidence for these properties invokes at least moderate confidence. In addition, all the criteria for variants of interest and under monitoring outlined below apply.</p>
                <table class="voc"><thead><tr><th>
			<p><strong>WHO label</strong></p>
			</th>
			<th>
			<p><strong>Lineage + additional mutations</strong></p>
			</th>
			<th>
			<p><strong>Country first detected (community)</strong></p>
			</th>
			<th>
			<p><strong>Spike mutations of interest</strong></p>
			</th>
			<th>
			<p><strong>Year and month first detected</strong></p>
			</th>
			<th>
			<p><strong>Impact on transmissibility</strong></p>
			</th>
			<th>
			<p><strong>Impact on immunity</strong></p>
			</th>
			<th>
			<p><strong>Impact on severity</strong></p>
			</th>
			<th>
			<p><strong>Transmission in EU/EEA</strong></p>
			</th>
		</tr></thead><tbody><tr><td><strong>Omicron</strong></td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=BA.2">BA.2</a></td>
			<td>South Africa</td>
			<td>(y)</td>
			<td>November 2021</td>
			<td>Increased (v) (1, 2)</td>
			<td>Increased (v) (3)</td>
			<td>Reduced (v) (4, 5)</td>
			<td>Community</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://github.com/cov-lineages/pango-designation/issues/517">BA.4</a></td>
			<td>South Africa</td>
			<td>L452R, F486V, R493Q</td>
			<td>January 2022</td>
			<td>No evidence</td>
			<td>Increased (6, 7)</td>
			<td>No evidence</td>
			<td>Community</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://github.com/cov-lineages/pango-designation/issues/517">BA.5</a></td>
			<td>South Africa</td>
			<td>L452R, F486V, R493Q</td>
			<td>February 2022</td>
			<td>No evidence</td>
			<td>Increased (6, 7)</td>
			<td>Unclear (8)</td>
			<td>Dominant</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=BA.2.75">BA.2.75</a> (x)</td>
			<td>India</td>
			<td>(y)</td>
			<td>May 2022</td>
			<td>No evidence</td>
			<td>Increased (9, 10)</td>
			<td>No evidence</td>
			<td>Detected (a)</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=BQ.1">BQ.1</a></td>
			<td>n/a</td>
			<td>K444T, N460K</td>
			<td>n/a</td>
			<td>No evidence</td>
			<td>Increased (m) (11)</td>
			<td>No evidence</td>
			<td>Detected (a)</td>
		</tr><tr><td>Omicron</td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=XBB">XBB</a> (z)</td>
			<td>n/a</td>
			<td>N460K, F490S</td>
			<td>n/a</td>
			<td>No evidence</td>
			<td>Increased (m) (11)</td>
			<td>No evidence</td>
			<td>Detected (a)</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=BA.2.3.20">BA.2.3.20</a></td>
			<td>n/a</td>
			<td>K444R, L452M, N460K</td>
			<td>n/a</td>
			<td>No evidence</td>
			<td>No evidence</td>
			<td>No evidence</td>
			<td>Detected (a)</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=BF.7">BF.7</a></td>
			<td>n/a</td>
			<td>R346T, F486V</td>
			<td>n/a</td>
			<td>No evidence</td>
			<td>No evidence</td>
			<td>No evidence</td>
			<td>Detected (a)</td>
		</tr><tr><td><strong>Omicron</strong></td>
			<td><a href="https://cov-lineages.org/lineage.html?lineage=XBC">XBC</a> (x)</td>
			<td>n/a</td>
			<td>N440K, F486P</td>
			<td>n/a</td>
			<td>No evidence</td>
			<td>No evidence</td>
			<td>No evidence</td>
			<td>Detected (a)</td>
		</tr></tbody></table>
            </div>
            </div>
        );
    }
}

export default Variants;