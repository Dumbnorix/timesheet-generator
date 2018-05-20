# Timesheet Generator

Timesheet generator exercise created by Alexander Bush

## Getting Started

Clone the repo and navigate into it.

```
git clone https://github.com/Dumbnorix/timesheet-generator.git
cd /your-workspace/timesheet-generator
```

### Installing

Install the dependencies and start up locally.

```
npm i && npm start
```

The browser will automatically open and redirect to http://localhost:3000/

Fill in the form as required and hit 'Generate Timesheets'.

The timesheets page is split based on the 'Placement type' selection.

To print timesheets right click the browser page and hit 'Print'

Each timesheet is styled to be split 1 per page, whether monthly or weekly.

## Running the tests

To run the tests use

```
npm test
```

This will start the test watcher, press 'a' to run all tests.

## Deployment

The site is currently statically hosted on AWS S3. You can find it running here:
http://timesheet.generator.s3-website.eu-central-1.amazonaws.com/

To deploy run a build and cp the build dir to your s3 bucket.

```
npm build
aws s3 cp build s3://your-bucket-name/ --recursive --region eu-central-1
```

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - the boilerplate code
* [material-ui](https://material-ui.com/) - react components built using material design 

## Authors

* **Alexander Bush** - *Initial work* - [Dumbnorix](https://github.com/Dumbnorix)
