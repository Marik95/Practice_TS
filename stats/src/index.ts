import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleRecoprt";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

//Create an object that implement the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');


// Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

