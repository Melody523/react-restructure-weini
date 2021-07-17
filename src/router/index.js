import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/home/Home'));
const Search = lazy(() => import('pages/search/Search'));
const BrandSearch = lazy(() => import('pages/brandSearch/BrandSearch'));
const Category = lazy(() => import('pages/category/Category'));


const RouteConfig = (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/brandSearch" component={BrandSearch}/>
        <Route path="/category" component={Category}/>
      </Switch>
    </Suspense>
  </Router>
);

export default RouteConfig;