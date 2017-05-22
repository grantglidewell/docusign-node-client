/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MatchBox', 'model/NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MatchBox'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Document = factory(root.Docusign.ApiClient, root.Docusign.MatchBox, root.Docusign.NameValue);
  }
}(this, function(ApiClient, MatchBox, NameValue) {
  'use strict';


  /**
   * The Document model module.
   * @module model/Document
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Document</code>.
   * @alias module:model/Document
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Document} obj Optional instance to populate.
   * @return {module:model/Document} The populated <code>Document</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applyAnchorTabs')) {
        obj['applyAnchorTabs'] = ApiClient.convertToType(data['applyAnchorTabs'], 'String');
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('documentBase64')) {
        obj['documentBase64'] = ApiClient.convertToType(data['documentBase64'], 'String');
      }
      if (data.hasOwnProperty('documentFields')) {
        obj['documentFields'] = ApiClient.convertToType(data['documentFields'], [NameValue]);
      }
      if (data.hasOwnProperty('documentGroup')) {
        obj['documentGroup'] = ApiClient.convertToType(data['documentGroup'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('encryptedWithKeyManager')) {
        obj['encryptedWithKeyManager'] = ApiClient.convertToType(data['encryptedWithKeyManager'], 'String');
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = ApiClient.convertToType(data['fileExtension'], 'String');
      }
      if (data.hasOwnProperty('includeInDownload')) {
        obj['includeInDownload'] = ApiClient.convertToType(data['includeInDownload'], 'String');
      }
      if (data.hasOwnProperty('matchBoxes')) {
        obj['matchBoxes'] = ApiClient.convertToType(data['matchBoxes'], [MatchBox]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('remoteUrl')) {
        obj['remoteUrl'] = ApiClient.convertToType(data['remoteUrl'], 'String');
      }
      if (data.hasOwnProperty('signerMustAcknowledge')) {
        obj['signerMustAcknowledge'] = ApiClient.convertToType(data['signerMustAcknowledge'], 'String');
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('transformPdfFields')) {
        obj['transformPdfFields'] = ApiClient.convertToType(data['transformPdfFields'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} applyAnchorTabs
   */
  exports.prototype['applyAnchorTabs'] = undefined;
  /**
   * 
   * @member {String} display
   */
  exports.prototype['display'] = undefined;
  /**
   * The document’s bytes. This field can be used to include a base64 version of the document bytes within an envelope definition instead of sending the document using a multi-part HTTP request. The maximum document size is smaller if this field is used due to the overhead of the base64 encoding.
   * @member {String} documentBase64
   */
  exports.prototype['documentBase64'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NameValue>} documentFields
   */
  exports.prototype['documentFields'] = undefined;
  /**
   * 
   * @member {String} documentGroup
   */
  exports.prototype['documentGroup'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * When set to **true**, the document is been already encrypted by the sender for use with the DocuSign Key Manager Security Appliance.  
   * @member {String} encryptedWithKeyManager
   */
  exports.prototype['encryptedWithKeyManager'] = undefined;
  /**
   * The file extension type of the document. If the document is not a PDF it is converted to a PDF.  
   * @member {String} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;
  /**
   * 
   * @member {String} includeInDownload
   */
  exports.prototype['includeInDownload'] = undefined;
  /**
   * Matchboxes define areas in a document for document matching when you are creating envelopes. They are only used when you upload and edit a template.   A matchbox consists of 5 elements:  * pageNumber - The document page number  on which the matchbox will appear.  * xPosition - The x position of the matchbox on a page.  * yPosition - The y position of the matchbox on a page. * width - The width of the matchbox.  * height - The height of the matchbox.  
   * @member {Array.<module:model/MatchBox>} matchBoxes
   */
  exports.prototype['matchBoxes'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {String} pages
   */
  exports.prototype['pages'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The file id from the cloud storage service where the document is located. This information is returned using [ML:GET /folders] or [ML:/folders/{folderid}]. 
   * @member {String} remoteUrl
   */
  exports.prototype['remoteUrl'] = undefined;
  /**
   * 
   * @member {String} signerMustAcknowledge
   */
  exports.prototype['signerMustAcknowledge'] = undefined;
  /**
   * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;
  /**
   * When set to **true**, PDF form field data is transformed into document tab values when the PDF form field name matches the DocuSign custom tab tabLabel. The resulting PDF form data is also returned in the PDF meta data when requesting the document PDF. See the [ML:Transform PDF Fields] section for more information about how fields are transformed into DocuSign tabs. 
   * @member {String} transformPdfFields
   */
  exports.prototype['transformPdfFields'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));

