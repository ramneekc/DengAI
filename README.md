![banner](https://github.com/ramneekc/DengAI/blob/master/img/dengai_banner.JPG)

This project aims to predict local epidemics of dengue fever using environmental data collected by U.S. Federal Government agencies. Using historical data for San Juan, Puerto Rico and Iquitos, Peru, predictions were generated with the machine learning tools Google TensorFlow and Facebook Prophet. Raw data is available [DrivenData]( https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/)

![top_row](https://github.com/ramneekc/DengAI/blob/master/img/dengai_map.JPG)

### Tools used
-	Tiaga Kanban for workflow management
-	Python with TensorFlow and Facebook Prophet machine learning modules
-	Jupyter and Colab notebooks for machine learning exploration
-	Javascript, HTML, and CSS for webpage design
-	Tableau and Highcharts for visualizations

![middle_row](https://github.com/ramneekc/DengAI/blob/master/img/dengai_yearly.JPG)

Our goal was to predict the number of dengue cases each week in each location based on environmental variables describing changes in temperature, precipitation, and vegetation. Predictions were generated based on a dataset with weekly cases from 1991 to 2007 for San Juan and 2001 to 2009 for Iquitos.

Two prediction models were used. Facebook Prophet forecasts time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. TensorFlow is a Deep Learning library developed by Google, we developed a simple Long Short-Term Memory(LSTM) model.

![prediction1](https://github.com/ramneekc/DengAI/blob/master/img/sj_predict.JPG)
![prediction2](https://github.com/ramneekc/DengAI/blob/master/img/iq_predict.JPG)

### Conclusion
As seen in both of the above graphs plotting the time series predictions over the training and testing true values, both of the machine learning models aren’t able to accurately predict large spikes in Dengue Fever.  While neither of these models are perfectly tuned, fine tuning a machine learning model takes quite a bit of hypothesis testing and therefore time, there seems to be an obvious need to bring in more related data in order to identify potential causal factors for the big spikes in the number of infected individuals per week.  Even though correlation coefficient isn’t a direct measurement of a feature variables impact on a target variables outcome, it still gives a good indication of features that can help a machine learning model predict more accurately.  San Juan’s environmental data features have a correlation coefficient range of -0.12 to 0.19 with respect to the number of cases per week, and Iquitos’s range is -0.13 to 0.23.  This shows a relationship between environmental factors and the number of Dengue cases per week exists, but none of the variables have an extremely strong proportional or inverse relationship to explain the large fluctuations in the trend.

