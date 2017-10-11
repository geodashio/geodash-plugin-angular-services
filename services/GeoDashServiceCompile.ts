declare var extract: any;
declare var geodash: any;

import { Component, Injectable, OnInit, EventEmitter, ReflectiveInjector } from '@angular/core';

/* Pipes */
import { GeoDashPipeAppend }  from 'GeoDashPipeAppend';
import { GeoDashPipeDefaultIfUndefined }  from 'GeoDashPipeDefaultIfUndefined';
import { GeoDashPipeDefaultIfUndefinedOrBlank }  from 'GeoDashPipeDefaultIfUndefinedOrBlank';
import { GeoDashPipeDefaultIfEmpty }  from 'GeoDashPipeDefaultIfEmpty';
import { GeoDashPipeEncodeBase64 }  from 'GeoDashPipeEncodeBase64';
import { GeoDashPipeExclude }  from 'GeoDashPipeExclude';
import { GeoDashPipeExtract }  from 'GeoDashPipeExtract';
import { GeoDashPipeExtractMultiple }  from 'GeoDashPipeExtractMultiple';
import { GeoDashPipeFilterDefined }  from 'GeoDashPipeFilterDefined';
import { GeoDashPipeFormatAddress }  from 'GeoDashPipeFormatAddress';
import { GeoDashPipeFormatArray }  from 'GeoDashPipeFormatArray';
import { GeoDashPipeFormatFloat }  from 'GeoDashPipeFormatFloat';
import { GeoDashPipeFormatInteger }  from 'GeoDashPipeFormatInteger';
import { GeoDashPipeFormatTelephone }  from 'GeoDashPipeFormatTelephone';
import { GeoDashPipeJoin }  from 'GeoDashPipeJoin';
import { GeoDashPipeLowerCase }  from 'GeoDashPipeLowerCase';
import { GeoDashPipeMGRS }  from 'GeoDashPipeMGRS';
import { GeoDashPipeMarkdownToHTML }  from 'GeoDashPipeMarkdownToHTML';
import { GeoDashPipePrepend }  from 'GeoDashPipePrepend';
import { GeoDashPipeReplace }  from 'GeoDashPipeReplace';
import { GeoDashPipeSelect }  from 'GeoDashPipeSelect';
import { GeoDashPipeSlugify }  from 'GeoDashPipeSlugify';
import { GeoDashPipeSplit }  from 'GeoDashPipeSplit';
import { GeoDashPipeTernaryDefined }  from 'GeoDashPipeTernaryDefined';
import { GeoDashPipeTitleCase }  from 'GeoDashPipeTitleCase';
import { GeoDashPipeUpperCase }  from 'GeoDashPipeUpperCase';


@Injectable()
export class GeoDashServiceCompile {

  private append: any;
  private default_if_undefined: any;
  private default_if_undefined_or_blank: any;
  private default_if_empty: any;
  private exclude: any;
  private extract: any;
  private extract_multiple: any;
  private b64: any;
  private filter_defined: any;
  private formatAddress: any;
  private formatArray: any;
  private formatFloat: any;
  private formatInteger: any;
  private formatTelephone: any;
  private join: any;
  private lower: any;
  private mgrs: any;
  private md2html: any;
  private prepend: any;
  private replace: any;
  private select: any;
  private slugify: any;
  private split: any;
  private ternary_defined: any;
  private title: any;
  private upper: any;

  private regexp_split_expressions: any;
  private regexp_extract_expression: any;
  private regexp_split_blocks: any;
  private regexp_split_args: any;
  //private regexp_split_terms: any;
  private regexp_split_array: any;
  private regexp_integer: any;
  private regexp_float: any;

  //constructor(private append: GeoDashPipeAppend, private default_if_undefined_or_blank: GeoDashPipeDefaultIfUndefinedOrBlank, private extract: GeoDashPipeExtract, private join: GeoDashPipeJoin, private md2html: GeoDashPipeMarkdownToHTML, private prepend: GeoDashPipePrepend, private slugify: GeoDashPipeSlugify, private ternary_defined: GeoDashPipeTernaryDefined) {
  constructor() {

    let injector = ReflectiveInjector.resolveAndCreate( [GeoDashPipeAppend, GeoDashPipeDefaultIfUndefined, GeoDashPipeDefaultIfUndefinedOrBlank, GeoDashPipeDefaultIfEmpty, GeoDashPipeExclude, GeoDashPipeExtract, GeoDashPipeExtractMultiple, GeoDashPipeEncodeBase64, GeoDashPipeFilterDefined, GeoDashPipeFormatAddress, GeoDashPipeFormatArray, GeoDashPipeFormatFloat, GeoDashPipeFormatInteger, GeoDashPipeFormatTelephone, GeoDashPipeJoin, GeoDashPipeLowerCase, GeoDashPipeMGRS, GeoDashPipeMarkdownToHTML, GeoDashPipePrepend, GeoDashPipeReplace, GeoDashPipeSelect, GeoDashPipeSlugify, GeoDashPipeSplit, GeoDashPipeTernaryDefined, GeoDashPipeTitleCase, GeoDashPipeUpperCase] );

    this.append = injector.get(GeoDashPipeAppend);
    this.default_if_undefined = injector.get(GeoDashPipeDefaultIfUndefined);
    this.default_if_undefined_or_blank = injector.get(GeoDashPipeDefaultIfUndefinedOrBlank);
    this.default_if_empty = injector.get(GeoDashPipeDefaultIfEmpty);
    this.b64 = injector.get(GeoDashPipeEncodeBase64);
    this.exclude = injector.get(GeoDashPipeExclude);
    this.extract = injector.get(GeoDashPipeExtract);
    this.extract_multiple = injector.get(GeoDashPipeExtractMultiple);
    this.filter_defined = injector.get(GeoDashPipeFilterDefined);
    this.formatAddress = injector.get(GeoDashPipeFormatAddress);
    this.formatArray = injector.get(GeoDashPipeFormatArray);
    this.formatFloat = injector.get(GeoDashPipeFormatFloat);
    this.formatInteger = injector.get(GeoDashPipeFormatInteger);
    this.formatTelephone = injector.get(GeoDashPipeFormatTelephone);
    this.join = injector.get(GeoDashPipeJoin);
    this.lower = injector.get(GeoDashPipeLowerCase);
    this.mgrs = injector.get(GeoDashPipeMGRS);
    this.md2html = injector.get(GeoDashPipeMarkdownToHTML);
    this.prepend = injector.get(GeoDashPipePrepend);
    this.replace = injector.get(GeoDashPipeReplace);
    this.select = injector.get(GeoDashPipeSelect);
    this.slugify = injector.get(GeoDashPipeSlugify);
    this.split = injector.get(GeoDashPipeSplit);
    this.ternary_defined = injector.get(GeoDashPipeTernaryDefined);
    this.title = injector.get(GeoDashPipeTitleCase);
    this.upper = injector.get(GeoDashPipeUpperCase);

    this.regexp_split_expressions = new RegExp("({{[^}]*}})", "gi");
    this.regexp_extract_expression = new RegExp("^{{(?:\\s*)(.*?)(?:\\s*)}}$", "gi"); // find "{{ }}"
    this.regexp_split_blocks = new RegExp("(?:\\s*)[|](?:\\s*)", "gi"); // split by |
    //this.regexp_split_args = new RegExp("(?:\\s*)[:](?:\\s*)", "gi");
    //this.regexp_split_args = new RegExp("(?:\\s*)((\'[^\']+\')|([^:]+))(?:\\s*)", "gi"); // split by :
    this.regexp_split_args = new RegExp("(?:\\s*)((?:\'[^']+\')|(?:[^+:]+))(?:\\s*)", "gi")
    //this.regexp_split_terms = new RegExp("(?:\\s*)((?:\'[^\']+\')|(?:[^+]+))(?:\\s*)", "gi"); // split by +
    this.regexp_split_array = new RegExp("(?:\\s*)((?:\'[^\']+\')|(?:[^,]+))(?:\\s*)", "gi");
    this.regexp_integer = new RegExp("(?:\\s*)(\\d+)(?:\\s*)", "gi");
    this.regexp_float = new RegExp("^(?:\\s*)(\\d+)[.](\\d+)(?:\\s*)$", "gi");
  }

  compile(template: string, ctx: any): string {
    //console.log("compiling ", template, "with context", ctx);
    //var m = "{{ feature.attributes.date | date : 'months' }} months".match(new RegExp("({{.*}}|.*)", "gi"));
    if(geodash.util.isString(template))
    {

      let parts = template.split(this.regexp_split_expressions).map((x:any) => {
        var expression = this.regexp_extract_expression.exec(x);
        if(expression)
        {
          let args: any = this.parseExpression(expression[1], ctx);
          if(args.length >= 2)
          {
            let value:any = this.parseTerm(args[0], ctx);
            let params: any[] = undefined;
            let terms: any[] = <any>[];
            for(var i = 1; i < args.length; i++)
            {
              if(args[i] == "|")
              {
                if(geodash.util.isDefined(params))
                {
                  params.push(geodash.util.deepCopy(terms));
                  value = this.exec(params[0][0], value, params.slice(1), ctx);
                }
                params = [];
                terms = [];
              }
              else if(args[i] == ":")
              {
                params.push(geodash.util.deepCopy(terms));
                terms = [];
              }
              else if(args[i] == "+")
              {
                continue;
              }
              else
              {
                terms.push(args[i]);
              }
            }
            params.push(geodash.util.deepCopy(terms));
            value = this.exec(params[0][0], value, params.slice(1), ctx);
            return value;
          }
          else if(args.length == 1)
          {
            return this.parseTerm(args[0], ctx);
          }
          else
          {
            return undefined;
          }
        }
        else
        {
          return x;
        }
      });

      return parts.join("");
    }
    else
    {
      return "";
    }

  }

  findall = (pattern: string, text: string, ignoreCase: boolean): any[] => {
    var rx = new RegExp(pattern, "g"+(ignoreCase ? "i": ""));
    var matches = [];
    var match: any = undefined;
    while((match = rx.exec(text)) !== null) {
      matches.push(match);
    }
    return matches;
  }

  parseExpression = (expression: any, ctx: any): any => {
    return expression.split(new RegExp("(?:\\s*)((?:\'[^']+\')|(?:[^+:|]+))(?:\\s*)", "gi"))
      .slice(1, -1)
      .map((x: string) => { return x.trim(); });
  }

  parseTerm = (x: any, ctx: any): any => {
    if(x.length >=2 && x.startsWith("[") && x.endsWith("]"))
    {
      return x.substring(1, x.length -1)
          .split(this.regexp_split_array)
          .slice(1, -1)
          .filter((y:any) => { return y != ","; })
          .map((y:any) => { return this.parseValue(y, ctx); });
    }
    else
    {
      return this.parseValue(x, ctx);
    }
  }

  parseValue = (x: any, ctx: any): any => {
    if(x.length >= 2 && x.startsWith("'") && x.endsWith("'"))
    {
      return x.substring(1, x.length -1);
    }
    else if(x == "true")
    {
      return true;
    }
    else if(x == "false")
    {
      return false;
    }
    else if(this.regexp_integer.test(x))
    {
      return parseInt(x, 10);
    }
    else if(this.regexp_float.test(x))
    {
      return parseFloat(x);
    }
    else
    {
      return extract(x, ctx);
    }
  }

  exec = (fn: string, value : any, params: any[], ctx: any): any => {
    if(geodash.util.isDefined(this[fn]))
    {
      if(params.length > 0)
      {
        params = params.map((terms: any[]): any => {
          if(terms.length >= 2)
          {
            return terms.map((term: any):any => { return this.parseTerm(term, ctx); }).join("");
          }
          else if(terms.length == 1)
          {
            return this.parseTerm(terms[0], ctx);
          }
          else
          {
            return undefined;
          }
        });
        return this[fn]['transform'](value, ...params);
      }
      else
      {
        return this[fn]['transform'](value);
      }
    }
    else
    {
      console.log("Error: Could not call pipe ", fn, "with args", params);
      return undefined;
    }
  }
}
